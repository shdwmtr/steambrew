import { NextResponse } from 'next/server';
import { FetchPlugins } from '../GetPlugins';

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

export async function POST(request: Request) {
	try {
		const plugins: PluginUpdateCheck[] = await request.json();
		const allPlugins = await FetchPlugins();

		// Fetch the latest metadata from GitHub
		const response = await fetch('https://raw.githubusercontent.com/shdwmtr/plugdb/refs/heads/main/metadata.json');
		if (!response.ok) {
			throw new Error('Failed to fetch metadata');
		}

		const metadata: PluginMetadata[] = await response.json();

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

		return NextResponse.json(pluginStatuses);
	} catch (error) {
		console.error('Error checking plugin updates:', error);
		return NextResponse.json({ error: 'Failed to check plugin updates' }, { status: 500 });
	}
}
