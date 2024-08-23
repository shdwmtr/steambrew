const credential = require('../credentials/cert.json')
var admin = require("firebase-admin");

const db = admin.firestore()

const firebase = {
    get: () => {
        return new Promise((resolve) => {
            db.collection('V2').get().then(snap => {
                resolve(snap)
            })
        })
    },
    from_id : (id) => {
        return new Promise((resolve, reject) => {
            db.collection('V2').doc(id).get().then(snap => {
                if (snap._fieldsProto === undefined) {
                    reject("document wasn't found.")
                }
                resolve(snap)
            })
        })
    },
    get_from: (owner, repo) => {
        return new Promise(async (resolve, reject) => {
            const doc = await db.collection("V2")
                .where("github.owner", "==", owner)
                .where("github.repo", "==", repo)
                .get()

            resolve(doc)
        })
    }
}

module.exports = { firebase }