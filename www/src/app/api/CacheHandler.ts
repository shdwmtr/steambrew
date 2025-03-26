export const CacheMiddleware = async (request: Request, onRequest: () => Promise<Response>) => {
	const requestClone = request.clone();

	const bodyKey = request.method === 'POST' ? await requestClone.text() : String();
	const cacheKey = request.url + ':' + bodyKey;

	if (global.requestCache.has(cacheKey)) {
		const cachedData: { body: string; headers: HeadersInit } = global.requestCache.get(cacheKey)!;
		return new Response(cachedData.body, { headers: cachedData.headers });
	}

	const response = await onRequest();
	const clonedResponse = response.clone();

	const body = await clonedResponse.text();
	const headers = Object.fromEntries(response.headers.entries());

	global.requestCache.set(cacheKey, { body, headers });
	return response;
};
