const { createLogger, format, transports, config } = require("winston");

const filesLogger = createLogger({
  transports: [new transports.Console()],
});
module.exports = filesLogger;
