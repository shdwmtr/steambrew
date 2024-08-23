const { graphql } = require("./components/graphql-interop.js")
const { graphql_updates } = require("./components/graphql-handler");

const {
    log,
    info,
    debug,
    warn,
    error,
    write,
} = require("firebase-functions/logger");

async function check_updates(req)
{
    const handler = new graphql_updates()
    req.body.forEach(item => handler.add(item.owner, item.repo))

    return new Promise(async (resolve, reject) => {

        const json = await graphql.post(handler.get())

        const tuples = Object.values(json.data)
            .map((repository, i) => ({
                download: `https://codeload.github.com/${req?.body[i]?.owner}/${req?.body[i]?.repo}/zip/refs/heads/${repository?.default_branch?.name}`,
                name: repository?.name ?? null, 
                commit: repository?.defaultBranchRef?.target?.oid ?? null,
                url: repository?.defaultBranchRef?.target?.commitUrl ?? null,
                date: repository?.defaultBranchRef?.target?.committedDate ?? null,
                message: repository?.defaultBranchRef?.target?.history?.edges[0]?.node.message ?? null
            }));
        
        resolve(tuples)
    });
}

module.exports = { check_updates }