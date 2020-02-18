const SDK = require('@ringcentral/sdk').SDK
const dotenv = require('dotenv')
const logger = require('./logger')

dotenv.config()

const rcsdk = new SDK({
    server: process.env.RINGCENTRAL_PLATFORM_URL,
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    handleRateLimit: true,
})

rcsdk.platform().on(rcsdk.platform().events.rateLimitError, () => {
    logger.info("Hit a rate limit, pausing...")
})

rcsdk.platform().on(rcsdk.platform().events.loginSuccess, async res => {
    res = await res.json()
    logger.info("Logged in successfully to RingCentral")

    storeAuth(res)
})

rcsdk.platform().on(rcsdk.platform().events.refreshSuccess, async res => {
    res = await res.json()
    logger.info("RingCentral auth refreshed")

    storeAuth(res)
})

module.exports = rcsdk