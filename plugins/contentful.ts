// const contentful = require('contentful')
import { createClient } from 'contentful'

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const contentfulConfig = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
}

// export `createClient` to use it in page components
module.exports = {
  client() {
    return createClient(contentfulConfig)
  },
}
