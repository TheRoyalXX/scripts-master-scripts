const ENVIRONMENT = process.env.ENVIRONMENT || "dev";
// const ENVIRONMENT = process.env.ENVIRONMENT || "prod";

const connectToDb = () => {
  if (ENVIRONMENT === "dev") require("./dataBases/connectToMongoDBlocally");
  if (ENVIRONMENT === "prod") require("./dataBases/connectToAtlas");
};

module.exports = connectToDb;
