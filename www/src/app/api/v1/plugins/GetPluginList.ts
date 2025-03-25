import querystring from 'querystring';

const RetrievePluginList = async () => {
	return new Promise((resolve, reject) => {
		fetch('https://api.github.com/repos/shdwmtr/plugdb/contents/plugins', {
			headers: {
				Authorization: process.env.BEARER!,
				'Content-Type': 'application/json',
			},
		})
			.then((text) => text.json())
			.then((data) => {
				resolve(
					data.map((plugin) => {
						const pluginLinks = plugin._links;
						const branch = querystring.parse(pluginLinks.self.split('?')[1]).ref;

						const owner = pluginLinks.html.split('/')[3];
						const repo = pluginLinks.html.split('/')[4];
						const commit = pluginLinks.html.split('/')[6];

						return {
							owner: owner,
							repo: repo,
							branch: branch,
							commit: commit,
						};
					}),
				);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export { RetrievePluginList };
