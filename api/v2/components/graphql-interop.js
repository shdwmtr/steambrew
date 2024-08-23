const graphql = {
    post: async (body) => {
        return new Promise((resolve, reject) => {
            fetch("https://api.github.com/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: process.env.BEARER
                },
                body: JSON.stringify({ query: body  })
            }).then(response => response.json()).then((json) => {
                resolve(json)
            })
        })
    }
}

module.exports = { graphql }