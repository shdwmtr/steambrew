const GithubGraphQL = {
	Post: async (body) => {
		return new Promise<{ data: Record<string, any> }>((resolve, reject) => {
			fetch('https://api.github.com/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					...(process.env.BEARER ? { Authorization: process.env.BEARER } : {}),
				},
				body: JSON.stringify({ query: body }),
			})
				.then((response) => response.json())
				.then((json) => {
					resolve(json);
				});
		});
	},
};

export { GithubGraphQL };
