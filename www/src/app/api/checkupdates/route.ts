import { NextResponse } from 'next/server';
import { FetchPlugins } from '../v1/plugins/GetPlugins';
import { GraphQLUpdates } from '../v2/GraphQLHandler';
import { GithubGraphQL } from '../v2/GraphQLInterop';
import { GetPluginMetadata } from '../v1/plugins/GetPluginMetadata';

interface PluginUpdateCheck {
	id: string;
	commit: string;
	name: string;
}

interface PluginMetadata {
	id: string;
	commitId: string;
}

interface PluginUpdateStatus {
	id: string;
	commit: string;
	hasUpdate: boolean;
	commitMessage?: string;
	pluginInfo: any;
}

async function CheckForThemeUpdates(requestBody) {
	// Check if themes are provided
	if (!requestBody || requestBody.length === 0) {
		return [];
	}

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

async function CheckForPluginUpdates(plugins: PluginUpdateCheck[]) {
	// Check if plugins are provided
	if (!plugins || plugins.length === 0) {
		return [];
	}

	// Try to get cached data
	const cachedAllPlugins = global.requestCache.get('allPlugins');
	const cachedMetadata = global.requestCache.get('pluginMetadata');

	let allPlugins, metadata;

	if (cachedAllPlugins && cachedMetadata) {
		allPlugins = cachedAllPlugins;
		metadata = cachedMetadata;
	} else {
		[allPlugins, metadata] = await Promise.all([FetchPlugins(), GetPluginMetadata()]);

		// Cache the results for 1 hour
		global.requestCache.set('allPlugins', allPlugins, 3600);
		global.requestCache.set('pluginMetadata', metadata, 3600);
	}

	// Check update status for all plugins
	const pluginStatuses: PluginUpdateStatus[] = plugins.map((plugin) => {
		const metadataEntry = metadata.find((m) => m.id === plugin.id);
		const pluginInfo = allPlugins.find((p) => p.initCommitId === plugin.id);

		if (!pluginInfo || !pluginInfo.commitId) {
			throw new Error(`Plugin ${plugin.id} not found or missing commit ID`);
		}

		return {
			id: plugin.id,
			pluginDirectory: plugin.name,
			commit: pluginInfo.commitId,
			hasUpdate: metadataEntry ? metadataEntry.commitId !== plugin.commit : false,
			commitMessage: pluginInfo.commitMessage,
			pluginInfo: pluginInfo,
		};
	});

	return pluginStatuses;
}

export async function POST(request: Request) {
	try {
		const json = await request.json();

		const [themeStatuses, pluginStatuses] = await Promise.all([
			CheckForThemeUpdates(json?.themes).catch((error) => {
				console.error('Error checking theme updates:', error);
				return { error: 'Failed to check theme updates: ' + String(error) };
			}),
			CheckForPluginUpdates(json?.plugins).catch((error) => {
				console.error('Error checking plugin updates:', error);
				return { error: 'Failed to check plugin updates: ' + String(error) };
			}),
		]);

		return NextResponse.json({
			themes: themeStatuses,
			plugins: pluginStatuses,
		});
	} catch (error) {
		console.error('Error checking plugin updates:', error);
		return NextResponse.json({ error: 'Failed to check plugin updates' }, { status: 500 });
	}
}
