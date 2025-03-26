export const firebaseAdmin = global.firebaseAdmin;
export const Database = global.Database;
export const StorageBucket = global.StorageBucket;

export const Firebase = {
	Get: () => {
		return new Promise<FirebaseFirestore.QuerySnapshot>((resolve) => {
			Database.collection('V2')
				.get()
				.then((snap) => {
					resolve(snap);
				});
		});
	},
	GetPluginData: () => {
		return new Promise<FirebaseFirestore.DocumentSnapshot>((resolve, reject) => {
			Database.collection('Plugins')
				.doc('PluginData')
				.get()
				.then((snap) => {
					if (snap.exists) {
						resolve(snap);
					} else {
						reject(new Error('Document not found'));
					}
				})
				.catch((error) => reject(error));
		});
	},
	SetPluginData: (data) => {
		return new Promise((resolve) => {
			Database.collection('Plugins')
				.doc('PluginData')
				.set(data)
				.then(() => {
					resolve(true);
				});
		});
	},
	FromID: (id) => {
		return new Promise<FirebaseFirestore.DocumentSnapshot>((resolve, reject) => {
			Database.collection('V2')
				.doc(id)
				.get()
				.then((snap) => {
					if (!snap.exists) {
						reject("document wasn't found.");
					}
					resolve(snap!);
				});
		});
	},
	FromRepository: (owner, repo) => {
		return new Promise<FirebaseFirestore.QuerySnapshot>(async (resolve, reject) => {
			resolve(await Database.collection('V2').where('github.owner', '==', owner).where('github.repo', '==', repo).get());
		});
	},
};
