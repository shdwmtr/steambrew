const { firebase } = require("../database/firebase.js")
const { graphql } = require("./components/graphql-interop.js")
const { graphql_repo } = require("./components/graphql-handler");

async function get_discord_info(token)
{
    const apiUrl = `https://discord.com/api/v9/invites/${token}?with_counts=true&with_expiration=true`;

    return new Promise((resolve, reject) => {
        fetch(apiUrl).then(response => response.json())  
        .then((discord) => {

            const data = {
                name: discord?.guild?.name,
                icon: `https://cdn.discordapp.com/icons/${discord?.guild?.id}/${discord?.guild?.icon}.webp`,
                link: `https://discord.gg/${token}`
            }
            resolve(data)
        })
        .catch(error => {
            reject('failed to get discord server info -> ' + error)
        });
    })
}

async function get_repository(owner, repo, readme_path, snap) {
    
    return new Promise(async (resolve, reject) =>
    {
        const handler = new graphql_repo()

        // encorporate the document data aswell as create time and id from the firebase api. 
        var doc_list = { ...snap.data(), id: snap.id, create_time: snap._createTime._seconds * 1000 };

        const json = await graphql.post(handler.get(owner, repo, readme_path))

        var tuples = Object.values(json.data).map(repository => repository)
        // themes that don't have a valid skin.json are filtered out. 
        .filter(repository => repository.file && repository.file.text)
        .map(repo => ({
            listing_style: repo?.listing_style?.text ?? null,
            // default branch of the repo, helps with file serving.
            default_branch: repo?.default_branch?.name, 
            // shortcut the content of the readme
            readme: repo?.read_me?.text ?? null, 
            // shortcut the content of the skin.json 
            theme: JSON.parse(repo?.file?.text ?? null), 
            repo: repo
        }))
        .map((data) => ({
            // inherited from millennium.styles.css from the default branch, styles the shadow dom.
            listing_style: data.listing_style,
            // thumbnail of the listing.
            header_image: data.theme?.header_image ?? "[NO-IMAGE]",
            // splash background image
            splash_image: data.theme?.splash_image ?? "[NO-IMAGE]",
            read_me: data.readme,
            tags: data.theme?.tags ?? [],
            // deprecated, only supported on millennium. 
            customize: {
                able: data.theme?.GlobalsColors?.length > 0 ? true : false,
                length: data.theme?.GlobalsColors?.length
            },
            // create a basis for what the theme affects. 
            patches: {
                specific_windows: data.theme?.Patches?.map(data => data?.MatchRegexString?.replace(/[!@#$%^&*()+{}\[\]:;<>,.?~\\/-]/g, '')),
                patches_default: data.theme?.UseDefaultPatches,
                length: data.theme?.Patches?.length
            },
            // discord support server. 
            discord: data.theme?.discord_support,
            // graphql api doesn't support HEAD file serving so its hard coded. 
            download: `https://codeload.github.com/${owner}/${repo}/zip/refs/heads/${data?.default_branch}` ?? null,

            // properties of the skin.json
            name: data.theme?.name  ?? null,
            description: data.theme?.description ?? "No description. Check back later",
            version: data.theme?.version ?? "none",
            skin_data: data.theme,

            // latest commit url
            commit_data: data.repo.defaultBranchRef.target,
            // mostly backend firebase api info
            data: doc_list
        }))
        
        resolve(tuples[0])
    })
}

async function get_details(req)
{
    return new Promise(async (resolve, reject) => {

        try {
            let snap = await firebase.from_id(req.params.id)

            const m_data = snap.data()
    
            // allows the management of the document. 
            if (m_data.disabled ?? false == true) {
                reject()
            }
    
            /* the owner of the github repository */
            const owner = snap.data().github.owner
            /* the repository name */
            const repo = snap.data().github.repo
    
            /* 
            in the case that the read me is not in the 
            root directory of the repo, we can specificy elsewhere from the db record.
            */
            const readme = snap.data().readme ?? "README.md"
    
            const repository = await get_repository(owner, repo, readme, snap)
            
            // if the discord invite code is specific, use discords private api to get info ;)
            const invite_token = repository.discord?.inviteCodeExcludingLink
            
            try {
                invite_token && (repository.discord = await get_discord_info(invite_token))
            }
            catch (error) { reject(error) }    
    
            resolve(repository)
        }
        catch (error) 
        {
            reject(error)
        }    
    })
}

module.exports = { get_details }