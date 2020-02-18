# About
This application repository gives a starting point for node js application. 

## Considerations
It includes the RingCentral JS SDK. Sets up the login for it using a `.env` file (copy the `env_exampl` file, fill it in and rename to `.env`). 

Also included is a rotating Winston logger. It will rotate logs each day. Instead of using `console.log()`, use `logger.info()` or `logger.error()`. 