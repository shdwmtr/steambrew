import { CacheMiddleware } from '@/app/api/CacheHandler';
import { StorageBucket } from '../../../Firebase';
import { FetchPlugins } from '../../plugins/GetPlugins';

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
	const onRequest = async () => {
		const { slug } = await params;

		try {
			const response = Response.json(await FindPlugin(slug), {
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
