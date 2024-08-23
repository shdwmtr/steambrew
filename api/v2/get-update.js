var admin = require("firebase-admin");
const { firebase } = require("../database/firebase.js")
const { graphql } = require("./components/graphql-interop.js")

async function get_update(req)
{
    const owner = req.body.owner
    const repo = req.body.repo

    const message = { 
        query: `query { repository(owner: "${owner}", name: "${repo}") { 
            zipballUrl: defaultBranchRef { target { ... on Commit { zipballUrl } } } 
        } }` 
    }

    return new Promise((resolve, reject) => {
        graphql.post(message.query).then(json => {
            resolve({
                success: true,
                data: {
                    download: json.data.repository.zipballUrl.target.zipballUrl
                }
            })
        })
        .catch((error) => {
            reject(error)
        })
    })
}

async function get_update_v2(req) {
    const message = { 
        query: `query { repository(owner: "${req.body.owner}", name: "${req.body.repo}") {
            defaultBranchRef { name target { ... on Commit { oid } } }
        } }`
    }
              
    return new Promise(async (resolve, reject) => 
    {
        const json = await graphql.post(message.query)
        const data = await firebase.get_from(req.body.owner, req.body.repo)
        
        if (!data.docs.length) {
            reject("couldn't find doc from collection")
        }

        const doc = data.docs.at(0)
        const count = isNaN(doc.data().download) ? 0 : doc.data().download + 1

        // update the download count 
        doc.ref.update({ download: count })          
                
        resolve({
            success: true,
            data: {
                download: `https://github.com/${req.body.owner}/${req.body.repo}/archive/refs/heads/${json?.data?.repository?.defaultBranchRef?.name}.zip`,
                rest: `https://api.github.com/repos/${req.body.owner}/${req.body.repo}/commits/${json?.data?.repository?.defaultBranchRef?.target?.oid}`,
                latestHash: json?.data?.repository?.defaultBranchRef?.target?.oid ?? null,
                count: count
            }
        })
    })
}

module.exports = { get_update, get_update_v2 }