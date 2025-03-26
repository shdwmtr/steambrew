import type NodeCache from 'node-cache';
import type admin from 'firebase-admin';

declare global {
	var requestCache: NodeCache;

	var firebaseAdmin: typeof admin;
	var Database: FirebaseFirestore.Firestore;
	var StorageBucket: admin.storage.Bucket;
}

export {};
