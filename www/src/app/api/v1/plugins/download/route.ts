import { Database, firebaseAdmin, StorageBucket } from '../../../Firebase';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const pluginId = searchParams.get('id');
	const downloadName = searchParams.get('n') || 'plugin.zip';

	if (!pluginId) {
		return new Response('Missing plugin ID', { status: 400 });
	}

	const file = StorageBucket.file(`plugins/${pluginId}.zip`);

	if (!(await file.exists())[0]) {
		return new Response(JSON.stringify({ error: 'File not found.' }), { status: 404 });
	}

	try {
		const docRef = Database.collection('downloads').doc(pluginId);
		await docRef.set({ downloadCount: firebaseAdmin.firestore.FieldValue.increment(1) }, { merge: true });
	} catch (err) {
		console.error('Error updating download count:', err);
	}

	try {
		const [metadata] = await file.getMetadata();
		const stream = file.createReadStream();

		const headers = new Headers();
		headers.set('Content-Type', metadata.contentType || 'application/zip');
		headers.set('Content-Disposition', `attachment; filename="${downloadName}"`);

		return new Response(stream as any, { headers });
	} catch (err) {
		console.error('Error streaming file:', err);
		return new Response(JSON.stringify({ error: 'An error occurred streaming the target file.' }), { status: 500 });
	}
}
