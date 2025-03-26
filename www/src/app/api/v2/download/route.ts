import { CacheMiddleware } from '../../CacheHandler';
import { Firebase } from '../../Firebase';

const IncrementDownload = async (requestBody) => {
	return new Promise(async (resolve, reject) => {
		const data = await Firebase.FromRepository(requestBody.owner, requestBody.repo);

		if (!data.docs.length) {
			reject("couldn't find doc from collection");
		}

		const doc = data.docs.at(0)!;
		const count = isNaN(doc.data().download) ? 0 : doc.data().download + 1;

		doc.ref.update({ download: count });

		resolve({
			success: true,
			data: {
				count: count,
			},
		});
	});
};

export async function POST(request: Request) {
	const json = await request.json();

	try {
		const response = await IncrementDownload(json);
		global.requestCache.set(request.url, response);

		return Response.json(response, {
			status: 200,
		});
	} catch (error) {
		return new Response(error, {
			status: 404,
		});
	}
}
