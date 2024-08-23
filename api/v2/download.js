const { firebase } = require("../database/firebase")

async function download(req) {
              
    return new Promise(async (resolve, reject) => 
    {
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
                count: count
            }
        })
    })
}

module.exports = { download }