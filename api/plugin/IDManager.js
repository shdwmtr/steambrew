const HashInformation = (repoName, repoOwner) => {
    // Add the two names, convert to base 64, and return the first 12 characters
    return Buffer.from(repoName + repoOwner).toString('base64').substring(0, 12);
}

module.exports = { HashInformation };