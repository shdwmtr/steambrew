interface PluginMetadata {
	commitId: string;
	id: string;
}

const GetPluginMetadata = async () => {
	return new Promise<PluginMetadata[]>((resolve, reject) => {
		fetch('https://raw.githubusercontent.com/shdwmtr/plugdb/refs/heads/main/metadata.json', {
			headers: {
				Authorization: process.env.BEARER!,
				'Content-Type': 'application/json',
			},
		})
			.then((text) => text.json())
			.then((data) => {
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export { GetPluginMetadata };
