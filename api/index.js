require('dotenv').config();

const cors = require('cors')
const express = require("express");

const millennium = express()

/* Setup express posting and CORS */
millennium.use(express.json())
millennium.use(express.urlencoded({ extended: true }))
millennium.use(cors());

var admin = require("firebase-admin");

const { onRequest } = require("firebase-functions/v2/https");
const { cache_handler, reset } = require("./middleware/cache.js")
const { rate_limit } = require("./middleware/rate-limiter.js")

admin.initializeApp({ 
    credential: admin.credential.cert(require('./credentials/cert.json')),
    storageBucket: "millennium-d9ce0.appspot.com"
});

const bucket = admin.storage().bucket();
const db = admin.firestore();

const { check_updates } = require("./v2/check-updates.js")
const { get_details } = require('./v2/get-details.js')
const { get_featured } = require('./v2/featured.js')
const { get_update_v2 } = require("./v2/get-update.js")
const { get_update } = require("./v2/get-update.js")
const { download } = require("./v2/download.js")

const { RetrievePluginList } = require("./plugin/GetPluginList.js")
const { GetPluginData } = require("./plugin/GetPluginData.js")
const { GetDownloadInfo } = require("./plugin/GetDownloadInfo.js")
const { GetPluginMetadata } = require("./plugin/GetPluginMetadata.js")

millennium.get("/api/updater", cache_handler, (_, res) => {
    res.json({
        up: true,
        message: "200 - good to go.",
        url: "https://api.github.com/repos/ShadowMonster99/millennium-steam-binaries/releases/latest"
    })
})

millennium.get("/api/v2/details/:id", cache_handler, async (req, res) => {
    
    get_details(req)
        .then(details => res.json(details))
        .catch(error => res.status(500).json({success: false, message: error.toString()}));
})

millennium.get("/api/v2", cache_handler, (_, res) => {

    get_featured()
        .then(details => res.json(details))
        .catch(error => res.status(500).json({success: false, message: error.toString()}));
})

millennium.post("/api/v2/update", (req, res) => {

    get_update_v2(req)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({success: false, message: error.toString()}))
})

/* Deprecated */
millennium.post("/api/v2/get-update", cache_handler, (req, res) => {

    get_update(req)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({success: false, message: error.toString()}))
})

millennium.post("/api/v2/download", rate_limit, (req, res) => {

    download(req)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({success: false, message: error.toString()}))
})

millennium.post("/api/v2/checkupdates", async (req, res) => {

    check_updates(req)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({success: false, message: error.toString()}))
})

millennium.get("/api/cache/reset", cache_handler, (_, res) => {
    reset()
    
    res.json({
        success: true
    })
})

/**
 * Support for plugins
 */
const FetchPlugins = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const pluginList = await RetrievePluginList();

            // Fetch all plugin metadata, data, and download counts in parallel
            const [metadata, pluginData] = await Promise.all([
                GetPluginMetadata(),
                GetPluginData(pluginList)
            ]);

            // Fetch all download counts in one Firestore call
            const downloadDocs = await db.collection('downloads').get();
            const downloadCounts = {};
            downloadDocs.forEach(doc => {
                downloadCounts[doc.id] = doc.data().downloadCount || 0;
            });


            // Process the plugin data
            for (const key in pluginData) {
                const data = metadata.find(meta => meta.commitId === pluginData[key].id);
                if (data) {
                    const pluginId = data.id.substring(0, 12); // Shortened ID
                    const initCommitId = data.id; // Full ID

                    pluginData[key].downloadCount = downloadCounts[initCommitId] ?? 0;
                    pluginData[key].id = pluginId;
                    pluginData[key].initCommitId = initCommitId;
                }
            }

            resolve(pluginData);
        } 
        catch (error) {
            console.error("An error occurred while processing plugins:", error);
            reject(error);
        }
    });
};

millennium.get("/api/v1/plugins", cache_handler, async (req, res) => {  
    res.json(await FetchPlugins())
})

millennium.get("/api/v1/plugin/:id", cache_handler, async (req, res) => {
    const plugin = (await FetchPlugins()).find(plugin => plugin.id === req.params.id)

    if (!plugin) { 
        res.status(404).json({ error: 1 });
        return;
    }

    try {
        const pluginBuild = bucket.file(`plugins/${plugin.initCommitId}.zip`);
        const [ exists ] = await pluginBuild.exists()
    
        if (exists) {
            const [ metadata ] = await pluginBuild.getMetadata()
            plugin.commitDate = new Date(metadata.updated) > new Date(metadata.timeCreated) ? metadata.updated : metadata.timeCreated;
            plugin.fileSize = Number(metadata.size);
            plugin.hasValidBuild = true;
        } 
        else {
            console.warn(`Plugin ${plugin.id} does not have a build available.`)
            plugin.hasValidBuild = false;
        }
    }
    catch (error) {
        console.error("An error occurred while checking plugin build:", error);
        plugin.hasValidBuild = false;
    }

    plugin.downloadUrl = `/api/v1/plugins/download/?id=${plugin?.initCommitId}&n=${plugin?.pluginJson?.name}.zip`;
    res.json(plugin)
})

millennium.get('/api/v1/plugins/download', async (req, res) => {
    console.log("Getting download info for", req.query.id);
    const fileName = req.query.id; 

    console.log(req.query)
    const downloadFileName = req.query.n;

    console.log("using filename", downloadFileName);
    const file = bucket.file(`plugins/${fileName}.zip`);

    // Increment the download count in Firestore
    try {
        
        const docRef = db.collection('downloads').doc(fileName);
        await docRef.set(
            { downloadCount: admin?.firestore?.FieldValue?.increment(1) ?? 1 },
            { merge: true }
        );
        console.log(`Download count incremented for ${fileName}`);
    } 
    catch (err) {
        console.error('Error updating download count:', err);
        // Continue processing the request even if updating count fails
    }

    file.createReadStream()
    .on('error', (err) => {
        console.error('Error streaming file:', err);
        res.status(500).send('Error streaming file');
    })
    .on('response', (response) => {
        res.setHeader('Content-Type', response.headers['content-type']);
        res.setHeader('Content-Disposition', `attachment; filename="${downloadFileName}"`);
    })
    .pipe(res)
    .on('finish', () => {
        console.log(`File ${fileName} streamed successfully!`);
    });
});


exports.api = onRequest({ cors: true }, millennium);