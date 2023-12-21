const chalk = require("chalk");
const { createCard } = require("../cards/models/cardsDataAccessService");
const data = require("./initialData.json");
const { registerUser } = require("../users/models/userDataService");

const generateInitialCards = async () => {
  const { cards } = data;
  cards.forEach(async (card) => {
    try {
      await createCard(card);
      return;
    } catch (error) {
      console.log(chalk.redBright(error.message));
      return;
    }
  });
};

const generateInitialUsers = async () => {
  const { users } = data;
  users.forEach(async (user) => {
    try {
      await registerUser(user);
      return;
    } catch (error) {
      console.log(chalk.redBright(error.message));
      return;
    }
  });
};

exports.generateInitialCards = generateInitialCards;
exports.generateInitialUsers = generateInitialUsers;
