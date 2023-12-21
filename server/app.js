const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const chalk = require("chalk");
const { handleError } = require("./utils/errorHandler");
const router = require("./router/router");
const cors = require("./middlewares/cors");
const logger = require("./logger/loggerService");
const dotEnv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const connectToDb = require("./DB/dbService");
const config = require("config");
const {
  generateInitialCards,
  generateInitialUsers,
} = require("./initialData/initialDataService");

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.text());
app.use(router);

// ========== ///
app.set("view engine", "ejs");

app.use((err, req, res, next) => {
  handleError(res, 500, err.message);
});

app.get("/", (req, res) => {
  res.send("in guy app");
});

app.get("/login", (req, res) => {
  res.render("login");
});

const PORT = config.get("PORT");
app.listen(PORT, () => {
  console.log(chalk.blueBright(`listening on: http://localhost:${PORT}`));
  connectToDb();
  // generateInitialCards();
  generateInitialUsers();
});
