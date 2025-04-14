import { Firebase } from '../../Firebase';

const FormatSize = (kilobytes) => {
	const units = ['KB', 'MB', 'GB', 'TB', 'PB'];
	let size = kilobytes;
	let unitIndex = 0;

	while (size >= 1024 && unitIndex < units.length - 1) {
		size /= 1024;
		unitIndex++;
	}

	return `${size.toFixed(2)} ${units[unitIndex]}`;
};

export interface PluginDataProps {
	pluginJson: any;
	usesBackend: boolean;
	readme: string;
	stargazerCount: number;
	diskUsage: string;
	commitDate: string;
	commitMessage: string;
	repoName: string;
	repoOwner: string;
	id: string;

	downloadSize?: string;
	downloadCount?: number;
	initCommitId?: string;
	commitId?: string;

	fileSize?: number;
	hasValidBuild?: boolean;
	downloadUrl?: string;
}

const GetPluginData = (pluginList) => {
	return new Promise<PluginDataProps[]>(async (resolve, reject) => {
		const query = `
            query {
            ${pluginList
				.map(
					(repo, index) => `
                repo${index}: repository(owner: "${repo.owner}", name: "${repo.repo}") {
                    stargazerCount
                    diskUsage
                    readme: object(expression: "${repo.commit}:README.md") {
                        ... on Blob {
                            text
                        }
                    }
                    pluginReadme: object(expression: "${repo.commit}:PLUGIN.md") {
                        ... on Blob {
                            text
                        }
                    }
                    pluginJson: object(expression: "${repo.commit}:plugin.json") {
                        ... on Blob {
                            text
                        }
                    }
                    commit: object(expression: "${repo.commit}") {
                        ... on Commit {
                            committedDate
                            message
                        }
                    }
                    repoName: name
                    repoOwner: owner {
                        login
                    }
                    commitId: object(expression: "${repo.commit}") {
                        ... on Commit {
                            oid
                        }
                    }
                }
            `,
				)
				.join('\n')}
            }
        `;

		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: process.env.BEARER!,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query }),
		});

		const pluginData = await Firebase.GetPluginData();

		const initialPluginData = pluginData.data();
		let mutablePluginData = structuredClone(initialPluginData);

		const jsonResponse = Object.values((await response.json()).data)
			.map((repository) => repository)
			.map((repo: any): PluginDataProps => {
				const pluginJson = JSON.parse(repo.pluginJson.text);

				return {
					pluginJson: pluginJson,
					usesBackend: pluginJson?.useBackend === true || pluginJson?.useBackend === undefined,
					readme: repo?.pluginReadme?.text || repo.readme.text,
					stargazerCount: repo.stargazerCount,
					diskUsage: FormatSize(repo.diskUsage),
					commitDate: repo.commit.committedDate,
					commitMessage: repo.commit.message,
					repoName: repo.repoName,
					repoOwner: repo.repoOwner.login,
					id: repo.commitId.oid,
				};
			});

		if (initialPluginData !== mutablePluginData) {
			Firebase.SetPluginData(mutablePluginData);
		}

		resolve(jsonResponse);
	});
};

export { GetPluginData };
