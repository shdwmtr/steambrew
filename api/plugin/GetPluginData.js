const { firebase } = require('../database/firebase');
const { HashInformation } = require('./IDManager');

const FormatSize = (kilobytes) => {
    const units = ["KB", "MB", "GB", "TB", "PB"];
    let size = kilobytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

const GetPluginData = (pluginList) => {
    return new Promise(async (resolve, reject) => {
        const query = `
            query {
            ${pluginList.map((repo, index) => `
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
            `).join('\n')}
            }
        `;

        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': process.env.BEARER,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });

        const pluginData = await firebase.getPluginData();

        const initialPluginData = pluginData.data();
        let mutablePluginData = structuredClone(initialPluginData);

        const data = await response.json();
        const jsonResponse = Object.values(data.data).map(repository => repository).map(repo => {
            const pluginJson = JSON.parse(repo.pluginJson.text);

            return {
                pluginJson: pluginJson,
                usesBackend: pluginJson?.useBackend === true || pluginJson?.useBackend === undefined,
                readme: repo?.pluginReadme?.text || repo.readme.text,
                stargazerCount: repo.stargazerCount,
                diskUsage: FormatSize(repo.diskUsage),
                commitDate: repo.commit.committedDate,
                repoName: repo.repoName,
                repoOwner: repo.repoOwner.login,
                id: repo.commitId.oid
            }
        });
        
        if (initialPluginData !== mutablePluginData) {
            firebase.setPluginData(mutablePluginData);
        }

        resolve(jsonResponse);
    })
}

module.exports = { GetPluginData }