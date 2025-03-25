import { StorageBucket } from '../../../Firebase';
import { FetchPlugins } from '../../plugins/route';

const FindPlugin = async (id: string) => {
	const plugin = (await FetchPlugins()).find((plugin) => plugin.id === id);

	if (!plugin) {
		throw new Error('Plugin not found');
	}

	try {
		const pluginBuild = StorageBucket.file(`plugins/${plugin.initCommitId}.zip`);
		const [exists] = await pluginBuild.exists();

		if (exists) {
			const [metadata] = await pluginBuild.getMetadata();
			plugin.fileSize = Number(metadata.size);
			plugin.hasValidBuild = true;
		} else {
			console.warn(`Plugin ${plugin.id} does not have a build available.`);
			plugin.hasValidBuild = false;
		}
	} catch (error) {
		console.error('An error occurred while checking plugin build:', error);
		plugin.hasValidBuild = false;
	}

	plugin.downloadUrl = `/api/v1/plugins/download/?id=${plugin?.initCommitId}&n=${plugin?.pluginJson?.name}.zip`;
	return plugin;
};

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	try {
		const plugin = await FindPlugin(slug);
		return new Response(JSON.stringify(plugin), {
			status: 200,
			headers: {
				'content-type': 'application/json',
			},
		});
	} catch (error) {
		return new Response(error.message, {
			status: 404,
		});
	}
}
