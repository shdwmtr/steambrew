class GraphQLFeatured {
	doc_count = 0;
	script_body = '';

	add_doc(owner, name) {
		this.script_body += `
        _${this.doc_count++}: repository(owner: "${owner}", name: "${name}") {
            name
            defaultBranchRef { name target { ... on Commit { oid commitUrl committedDate } } }
            file: object(expression: "HEAD:skin.json") { ... on Blob { text } }
            zipballUrl: defaultBranchRef { target { ... on Commit { zipballUrl } } }
        }`;
	}

	get() {
		return `query { ${this.script_body} }`;
	}
}

class GraphQLUpdates {
	doc_count = 0;
	script_body = '';

	add(owner, name) {
		this.script_body += `
        _${this.doc_count++}: repository(owner: "${owner}", name: "${name}") {
            name
            default_branch: defaultBranchRef { name }
            defaultBranchRef {
                name target { ... on Commit { oid commitUrl committedDate history(first: 1) { edges { node { message } } } } }
            }
        }`;
	}

	get() {
		return `query { ${this.script_body} }`;
	}
}

class GraphQLRepository {
	get(owner, repo, readme_path) {
		return `query {
                repository(owner: "${owner}", name: "${repo}") {
                    name
                    defaultBranchRef { name target { ... on Commit { oid commitUrl committedDate } } }
                    file: object(expression: "HEAD:skin.json") { ... on Blob { text } }
                    read_me: object(expression: "HEAD:${readme_path}") { ... on Blob { text } }
                    listing_style: object(expression: "HEAD:millennium.styles.css") { ... on Blob { text } }
                    default_branch: defaultBranchRef { name }
                    zipballUrl: defaultBranchRef { target { ... on Commit { zipballUrl } } }
                }
            }`;
	}
}

export { GraphQLFeatured, GraphQLUpdates, GraphQLRepository };
