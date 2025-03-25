import { GraphQLUpdates } from '../GraphQLHandler';
import { GithubGraphQL } from '../GraphQLInterop';

async function CheckForUpdates(requestBody) {
	const graphQLHandler = new GraphQLUpdates();
	requestBody.forEach((item) => graphQLHandler.add(item.owner, item.repo));

	return new Promise(async (resolve) => {
		resolve(
			Object.values((await GithubGraphQL.Post(graphQLHandler.get())).data).map((repository, i) => ({
				download: `https://codeload.github.com/${requestBody[i]?.owner}/${requestBody[i]?.repo}/zip/refs/heads/${repository?.default_branch?.name}`,
				name: repository?.name ?? null,
				commit: repository?.defaultBranchRef?.target?.oid ?? null,
				url: repository?.defaultBranchRef?.target?.commitUrl ?? null,
				date: repository?.defaultBranchRef?.target?.committedDate ?? null,
				message: repository?.defaultBranchRef?.target?.history?.edges[0]?.node.message ?? null,
			})),
		);
	});
}

export async function POST(request: Request) {
	const json = await request.json();

	try {
		return Response.json(await CheckForUpdates(json), {
			status: 200,
		});
	} catch (error) {
		return new Response(error, {
			status: 404,
		});
	}
}
