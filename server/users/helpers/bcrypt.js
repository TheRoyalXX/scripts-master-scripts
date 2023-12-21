const bcrypt = require("bcryptjs");

const generateUserPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const comparePassword = (password, encodedPassword) => {
  return bcrypt.compareSync(password, encodedPassword);
};

exports.generateUserPassword = generateUserPassword;
exports.comparePassword = comparePassword;
