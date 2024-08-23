// Define a map to store request timestamps
const requestTimestamps = new Map();

// Middleware to rate limit requests
const rate_limit = (req, res, next) => {
    const ipAddress = req.ip; // Get IP address of requester
    const { owner, repo } = req.body; // Get owner and repo from request body

    // Check if IP address, owner, and repo combination has made a request before
    const key = `${ipAddress}:${owner}:${repo}`;
    if (requestTimestamps.has(key)) {
        const lastRequestTime = requestTimestamps.get(key);
        const currentTime = Date.now();

        // Check if last request was made less than 5 minutes ago
        if (currentTime - lastRequestTime < 5 * 60 * 1000) {
            return res.status(429).send({
                success: false, 
                message: "Exceeded preliminary rate limit"
            });
        }
    }

    // Store current request time for this IP address, owner, and repo combination
    requestTimestamps.set(key, Date.now());

    // Proceed to next middleware or route handler
    next();
};

module.exports = { rate_limit }