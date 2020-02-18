const winston = require('winston')
const DailyRotateFile = require('winston-daily-rotate-file')


const logger = winston.createLogger({
    level: 'info',
    levels: winston.config.npm.levels,
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    exitOnError: false,
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new DailyRotateFile({ filename: './logs/error.log', level: 'error' }),
        new DailyRotateFile({ filename: './logs/combined.log' }),
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.prettyPrint()
            )
        })
    ]
})

module.exports = logger