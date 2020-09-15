module.exports = {
    resolve: `gatsby-plugin-env-variables`,
    options: {
        allowList: [
            "ENVIRONMENT", 
            "SITE_DEV",
            "SITE_STG",
            "SITE_PDN",
            "LOCALE",
        ]
    },
}