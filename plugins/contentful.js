import { createClient } from 'contentful'

// export `createClient` to use it in page components
const client = ({ $config: { ctfID, ctfToken } }) => {
  // use default environment config for convenience
  // these will be set via `env` property in nuxt.config.js
  const config = {
    space: ctfID,
    accessToken: ctfToken,
  }
  return createClient(config)
}

export default client
