import { Firebase } from '../../../Firebase';
import { GithubGraphQL } from '../../GraphQLInterop';
import { GraphQLRepository } from '../../GraphQLHandler';
import { CacheMiddleware } from '@/app/api/CacheHandler';

interface DiscordInfo {
	name?: string;
	icon?: string;
	link?: string;
	inviteCodeExcludingLink?: string;
}

interface RepositoryData {
	listing_style: string | null;
	header_image: string;
	splash_image: string;
	read_me: string | null;
	tags: string[];
	customize: {
		able: boolean;
		length: number;
	};
	patches: {
		specific_windows?: string[];
		patches_default?: boolean;
		length?: number;
	};
	discord?: DiscordInfo;
	download: string;
	name?: string;
	description: string;
	version: string;
	skin_data?: any;
	commit_data?: any;
	data?: any;
}

async function getDiscordInfo(token: string): Promise<DiscordInfo> {
	const apiUrl = `https://discord.com/api/v9/invites/${token}?with_counts=true&with_expiration=true`;
	try {
		const response = await fetch(apiUrl);
		const discord = await response.json();
		return {
			name: discord?.guild?.name,
			icon: `https://cdn.discordapp.com/icons/${discord?.guild?.id}/${discord?.guild?.icon}.webp`,
			link: `https://discord.gg/${token}`,
		};
	} catch (error) {
		throw new Error('Failed to get Discord server info -> ' + error);
	}
}

async function getRepository(owner: string, repo: string, readmePath: string, snap: any): Promise<RepositoryData> {
	const handler = new GraphQLRepository();
	const docList = { ...snap.data(), id: snap.id, create_time: snap._createTime._seconds * 1000 };

	const json = await GithubGraphQL.Post(handler.get(owner, repo, readmePath));

	const tuples = Object.values(json.data)
		.filter((repository: any) => repository.file && repository.file.text)
		.map((repo: any) => ({
			listing_style: repo?.listing_style?.text ?? null,
			default_branch: repo?.default_branch?.name,
			readme: repo?.read_me?.text ?? null,
			theme: JSON.parse(repo?.file?.text ?? '{}'),
			repo,
		}))
		.map((data: any) => ({
			listing_style: data.listing_style,
			header_image: data.theme?.header_image ?? '[NO-IMAGE]',
			splash_image: data.theme?.splash_image ?? '[NO-IMAGE]',
			read_me: data.readme,
			tags: data.theme?.tags ?? [],
			customize: {
				able: (data.theme?.GlobalsColors?.length ?? 0) > 0,
				length: data.theme?.GlobalsColors?.length ?? 0,
			},
			patches: {
				specific_windows: data.theme?.Patches?.map((patch: any) => patch?.MatchRegexString?.replace(/[!@#$%^&*()+{}\[\]:;<>,.?~\\/-]/g, '')),
				patches_default: data.theme?.UseDefaultPatches,
				length: data.theme?.Patches?.length,
			},
			discord: data.theme?.discord_support,
			download: `https://codeload.github.com/${owner}/${repo}/zip/refs/heads/${data?.default_branch}`,
			name: data.theme?.name ?? null,
			description: data.theme?.description ?? 'No description. Check back later',
			version: data.theme?.version ?? 'none',
			skin_data: data.theme,
			commit_data: data.repo.defaultBranchRef.target,
			data: docList,
		}));

	return tuples[0];
}

async function getDetails(id: string): Promise<RepositoryData> {
	try {
		const snap = await Firebase.FromID(id);
		const mData = snap.data()!;
		if (mData?.disabled) {
			throw new Error('Repository is disabled');
		}

		const owner = mData.github.owner;
		const repo = mData.github.repo;
		const readme = mData.readme ?? 'README.md';

		const repository = await getRepository(owner, repo, readme, snap);
		const inviteToken = repository.discord?.inviteCodeExcludingLink;

		if (inviteToken) {
			repository.discord = await getDiscordInfo(inviteToken);
		}

		return repository;
	} catch (error) {
		throw new Error('Failed to fetch repository details -> ' + error);
	}
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
	const onRequest = async () => {
		const { slug } = await params;

		try {
			const response = Response.json(await getDetails(slug), {
				status: 200,
			});

			response.headers.set('Access-Control-Allow-Origin', 'https://steamloopback.host');
			response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
			response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

			return response;
		} catch (error) {
			const response = new Response(error.message, {
				status: 404,
			});

			response.headers.set('Access-Control-Allow-Origin', 'https://steamloopback.host');
			response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
			response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

			return response;
		}
	};
	return await CacheMiddleware(request, onRequest);
}

export async function OPTIONS() {
	return new Response(null, {
		status: 204,
		headers: {
			/** Whitelist the Steam Client to allow it to make requests */
			'Access-Control-Allow-Origin': 'https://steamloopback.host',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		},
	});
}
