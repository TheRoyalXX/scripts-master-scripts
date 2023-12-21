const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect("mongodb://127.0.0.1:27017/scripts_app")
  .then(() => console.log(chalk.magentaBright("connected to MongoDB locally")))
  .catch((error) =>
    console.log(chalk.redBright(`could not connect to mongoDB: ${error}`))
  );
