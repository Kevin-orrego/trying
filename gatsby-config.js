const dotenv = require('dotenv');
const envVariablesConfig = require('./src/shared/config/env-config');
const metaInfo = require('./src/shared/config/meta-config');

let activeEnv = process.env.GATSBY_ACTIVE_ENV || "development";
console.log('::::::::::::::::::::::activeEnv ' + activeEnv);

dotenv.config({ path: `./src/shared/env/.env.${activeEnv}` });

const defaultLanguage = process.env.LOCALE;
console.log("::::::::::::::::::::::LOCALE", defaultLanguage);

module.exports = {
  siteMetadata: metaInfo,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    envVariablesConfig,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
  ],
}
