const dotenv = require('dotenv');

let activeEnv = process.env.GATSBY_ACTIVE_ENV || "development";

dotenv.config({ path: `./src/shared/env/.env.${activeEnv}` });

module.exports = {
  title: `NosotrasOnline`,
  description: `Todo lo que necesitas saber sobre tampones, toallas higiénicas, protectores diarios, pañitos húmedos, menstruación, horóscopo, belleza y más en NosotrasOnline`,
  author: `NosotrasOnline`,
  siteUrl: process.env.SITE_URL,
};