/**
 * This file is used to register global variables and caches
 * that can be used throughout the application
 */
export async function register() {
	if (process.env.NEXT_RUNTIME === 'nodejs') {
		console.log('Registering global caches');

		const NodeCache = (await import('node-cache')).default;

		const cache = new NodeCache({
			stdTTL: 3600,
			checkperiod: 600,
		});

		const admin = await import('firebase-admin');
		admin.initializeApp({
			credential: admin.credential.cert(require('@/../firebase.credentials.json')),
			storageBucket: 'millennium-d9ce0.appspot.com',
		});

		global.requestCache = cache;
		global.firebaseAdmin = admin;
		global.Database = admin.firestore();
		global.StorageBucket = admin.storage().bucket();
	}
}
