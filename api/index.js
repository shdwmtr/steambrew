require('dotenv').config();

const cors = require('cors')
const express = require("express");

const millennium = express()
millennium.listen(3000)

/* Setup express posting and CORS */
millennium.use(express.json())
millennium.use(express.urlencoded({ extended: true }))
millennium.use(cors());

var admin = require("firebase-admin");
const functions = require("firebase-functions")
const { cache_handler, reset } = require("./middleware/cache.js")
const { rate_limit } = require("./middleware/rate-limiter.js")

admin.initializeApp({ 
    credential: admin.credential.cert(require('./credentials/cert.json'))
});

const { check_updates } = require("./v2/check-updates.js")
const { get_details } = require('./v2/get-details.js')
const { get_featured } = require('./v2/featured.js')
const { get_update_v2 } = require("./v2/get-update.js")
const { get_update } = require("./v2/get-update.js")
const { download } = require("./v2/download.js")

const { RetreivePluginList } = require("./plugin/GetPluginList.js")
const { GetPluginData } = require("./plugin/GetPluginData.js")

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

millennium.get("/api/v1/plugins", cache_handler, async (req, res) => {  
    const pluginList = await RetreivePluginList()
    const pluginData = await GetPluginData(pluginList)

    res.json(pluginData)
})

millennium.get("/api/v1/plugins/:id", cache_handler, async (req, res) => {
    const pluginList = await RetreivePluginList()
    const pluginData = await GetPluginData(pluginList)

    const plugin = pluginData.find(plugin => plugin.id === req.params.id)
    res.json(plugin)
})

exports.api = functions.https.onRequest(millennium)