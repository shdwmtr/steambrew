import { Firebase } from '../../Firebase';

const IncrementDownload = async (req) => {
	return new Promise(async (resolve, reject) => {
		const data = await Firebase.FromRepository(req.body.owner, req.body.repo);

		if (!data.docs.length) {
			reject("couldn't find doc from collection");
		}

		const doc = data.docs.at(0);
		const count = isNaN(doc.data().download) ? 0 : doc.data().download + 1;

		// update the download count
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
		const data = await GetThemeUpdate(json);
		return new Response(JSON.stringify(data), {
			status: 200,
		});
	} catch (error) {
		return new Response(error, {
			status: 404,
		});
	}
}
