const minutes = 60

const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: minutes * 60 }); // stdTTL is set to 1800 seconds (30 minutes)

// Middleware function to cache requests
const cache_handler = (req, res, next) => {
    const key = req.originalUrl || req.url;
    const cached = cache.get(key);
    
    if (cached) {
        return res.json(cached);
    } 

    res.sendResponse = res.json;
    res.json = (body) => {
        cache.set(key, body); 
        res.sendResponse(body);
    };
    next();
};

const reset = () => {
    cache.flushStats()
}

module.exports = { cache_handler, reset }
