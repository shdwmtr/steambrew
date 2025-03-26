import { CacheMiddleware } from '../../CacheHandler';
import { FetchPlugins } from './GetPlugins';

export async function GET(request: Request) {
	const onRequest = async () => {
		return Response.json(await FetchPlugins());
	};
	return await CacheMiddleware(request, onRequest);
}
