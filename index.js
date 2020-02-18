const rcsdk = require('./lib/rc-sdk')
const logger = require('./lib/logger')

rcsdk.platform().login({
    username: process.env.RINGCENTRAL_USERNAME,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD
})
    .then(() => {
        logger.info("Logged in to RingCentral successfully")
    })
    .then(() => {
        // kick off the application. all other logic is handled from main()
        main()
    })
    .catch(e => {
        logger.error("Issue logging in: ", e)
    })


async function main() {
    
}