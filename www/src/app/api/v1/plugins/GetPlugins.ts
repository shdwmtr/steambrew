import { Database } from '../../Firebase';
import { GetPluginData, PluginDataProps } from './GetPluginData';
import { GetPluginMetadata } from './GetPluginMetadata';
import { RetrievePluginList } from './GetPluginList';

const FormatBytes = (bytes: number, decimals = 2) => {
	if (bytes === 0) return '0 Bytes';
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${sizes[i]}`;
};

export const FetchPlugins = async () => {
	return new Promise<PluginDataProps[]>(async (resolve, reject) => {
		try {
			const pluginList = await RetrievePluginList();

			const [metadata, pluginData] = await Promise.all([GetPluginMetadata(), GetPluginData(pluginList)]);
			const [files, downloadDocs] = await Promise.all([StorageBucket.getFiles({ prefix: 'plugins/' }), Database.collection('downloads').get()]);

			const fileMetadataMap = new Map();
			const downloadCounts = {};

			await Promise.all(
				files[0].map(async (file) => {
					const [metadata] = await file.getMetadata();
					fileMetadataMap.set(file.name, metadata);
				}),
			);

			downloadDocs.forEach((doc) => {
				downloadCounts[doc.id] = doc.data().downloadCount || 0;
			});

			for (const key in pluginData) {
				const data = metadata.find((meta) => meta.commitId === pluginData[key].id);
				if (data) {
					const pluginId = data.id.substring(0, 12);
					const initCommitId = data.id;
					const filePath = `plugins/${initCommitId}.zip`;
					const fileMetadata = fileMetadataMap.get(filePath);

					if (fileMetadata) {
						pluginData[key].downloadSize = FormatBytes(fileMetadata.size);
					}

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
