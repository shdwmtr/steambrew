import { headers } from 'next/headers';
import dotenv from 'dotenv';

dotenv.config();

import { GraphQLFeatured } from './GraphQLHandler';
import { GithubGraphQL } from './GraphQLInterop';
import { Firebase } from '../Firebase';
import { CacheMiddleware } from '../CacheHandler';

function getDate(unixTime: number): string {
	const d = new Date(unixTime * 1000);
	return `${d.toISOString().slice(0, 19)}Z`;
}

interface DocData {
	id: string;
	create_time: string;
	github: {
		owner: string;
		repo: string;
	};
	disabled?: boolean;
	[key: string]: any;
}

interface Repository {
	file?: {
		text?: string;
	};
	defaultBranchRef?: {
		name?: string;
		target?: any;
	};
}

async function parseDocs(snap: any): Promise<any[]> {
	const handler = new GraphQLFeatured();
	const docs: DocData[] = [];

	snap.docs.forEach((doc: any) => {
		try {
			const data = doc.data();
			if (data.disabled ?? false) return;

			handler.add_doc(data.github.owner, data.github.repo);
			docs.push({
				...data,
				id: doc.id,
				create_time: getDate(doc._createTime._seconds),
			});
		} catch (e) {
			console.error(e);
		}
	});

	const tuples = Object.values((await GithubGraphQL.Post(handler.get())).data)
		.map((repository: Repository) => repository)
		.filter((repository) => repository.file?.text)
		.map((repo) => ({ skin_info: JSON.parse(repo?.file?.text ?? '{}'), repo }))

		.map((data, i) => ({
			header_image: data.skin_info?.header_image ?? '[NO-IMAGE]',
			splash_image: data.skin_info?.splash_image ?? '[NO-IMAGE]',
			tags: data.skin_info?.tags ?? [],
			download: `https://github.com/${docs[i]?.github.owner}/${docs[i]?.github.repo}/archive/refs/heads/${data?.repo?.defaultBranchRef?.name}.zip`,
			name: data.skin_info?.name ?? docs[i]?.github.repo,
			description: data.skin_info?.description ?? 'No description. Check back later',
			version: data.skin_info?.version ?? 'none',
			commit_data: data.repo.defaultBranchRef?.target,
			data: docs[i] ?? null,
			skin_data: data.skin_info,
		}));

	return tuples;
}

async function getFeatured(): Promise<any[]> {
	try {
		return await parseDocs(await Firebase.Get());
	} catch (error) {
		throw error;
	}
}

export async function GET(request: Request) {
	const onRequest = async () => {
		return Response.json(await getFeatured());
	};
	return await CacheMiddleware(request, onRequest);
}
