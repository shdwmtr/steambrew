import { Database } from '../../Firebase';
import { GetPluginData, PluginDataProps } from './GetPluginData';
import { GetPluginMetadata } from './GetPluginMetadata';
import { RetrievePluginList } from './GetPluginList';
import { headers } from 'next/headers';
import { CacheMiddleware } from '../../CacheHandler';

export const FetchPlugins = async () => {
	return new Promise<PluginDataProps[]>(async (resolve, reject) => {
		try {
			const pluginList = await RetrievePluginList();

			// Fetch all plugin metadata, data, and download counts in parallel
			const [metadata, pluginData] = await Promise.all([GetPluginMetadata(), GetPluginData(pluginList)]);

			// Fetch all download counts in one Firestore call
			const downloadDocs = await Database.collection('downloads').get();
			const downloadCounts = {};
			downloadDocs.forEach((doc) => {
				downloadCounts[doc.id] = doc.data().downloadCount || 0;
			});

			// Process the plugin data
			for (const key in pluginData) {
				const data = metadata.find((meta) => meta.commitId === pluginData[key].id);
				if (data) {
					const pluginId = data.id.substring(0, 12); // Shortened ID
					const initCommitId = data.id; // Full ID

					pluginData[key].downloadCount = downloadCounts[initCommitId] ?? 0;
					pluginData[key].id = pluginId;
					pluginData[key].commitId = data.commitId;
					pluginData[key].initCommitId = initCommitId;
				}
			}

			resolve(pluginData);
		} catch (error) {
			console.error('An error occurred while processing plugins:', error);
			reject(error);
		}
	});
};

export async function GET(request: Request) {
	const onRequest = async () => {
		return Response.json(await FetchPlugins());
	};
	return await CacheMiddleware(request, onRequest);
}
