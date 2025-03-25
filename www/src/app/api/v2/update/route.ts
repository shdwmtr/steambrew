import { Firebase } from '../../Firebase';
import { GithubGraphQL } from '../GraphQLInterop';

async function GetThemeUpdate(requestBody: any) {
	const message = {
		query: `query { repository(owner: "${requestBody.owner}", name: "${requestBody.repo}") {
            defaultBranchRef { name target { ... on Commit { oid } } }
        } }`,
	};

	return new Promise(async (resolve, reject) => {
		const json = await GithubGraphQL.Post(message.query);
		const data = await Firebase.FromRepository(requestBody.owner, requestBody.repo);

		if (!data.docs.length) {
			reject("couldn't find doc from collection");
			return;
		}

		const doc = data.docs.at(0)!;
		const count = isNaN(doc.data().download) ? 0 : doc.data().download + 1;

		// update the download count
		doc.ref.update({ download: count });

		resolve({
			success: true,
			data: {
				download: `https://github.com/${requestBody.owner}/${requestBody.repo}/archive/refs/heads/${json?.data?.repository?.defaultBranchRef?.name}.zip`,
				rest: `https://api.github.com/repos/${requestBody.owner}/${requestBody.repo}/commits/${json?.data?.repository?.defaultBranchRef?.target?.oid}`,
				latestHash: json?.data?.repository?.defaultBranchRef?.target?.oid ?? null,
				count: count,
			},
		});
	});
}

export async function POST(request: Request) {
	const json = await request.json();

	try {
		return Response.json(await GetThemeUpdate(json), {
			status: 200,
		});
	} catch (error) {
		return new Response(error, {
			status: 404,
		});
	}
}
