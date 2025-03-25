import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

/**
 * Middleware to cache responses, reducing the number of requests to the API
 * It's server-side only, so it won't cache responses for the client
 * @param request The incoming request
 * @returns The response to send back to the client
 */
export function middleware(request: NextRequest) {
	const cacheKey = request.url;
	const cachedData = cache.get(cacheKey);

	if (cachedData) {
		return NextResponse.json(cachedData);
	}

	return NextResponse.next();
}

export const config = {
	matcher: '/api/*',
};
