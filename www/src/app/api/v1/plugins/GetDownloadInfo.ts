const GetDownloadInfo = async () => {
	return new Promise((resolve, reject) => {
		fetch('https://api.github.com/repos/shdwmtr/plugdb/releases', {
			headers: {
				Authorization: process.env.BEARER!,
				'Content-Type': 'application/json',
			},
		})
			.then((text) => text.json())
			.then((data) => {
				let downloadCounts = {};

				data.forEach((release) => {
					release.assets.forEach((asset) => {
						if (downloadCounts[asset.name]) {
							downloadCounts[asset.name] += asset.download_count;
						} else {
							downloadCounts[asset.name] = asset.download_count;
						}
					});
				});

				resolve(downloadCounts);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = { GetDownloadInfo };
