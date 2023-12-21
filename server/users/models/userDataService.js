const normlizeUser = require("../helpers/normlizeUser");
const { pick } = require("lodash");
const User = require("./mongodb/User");
const { comparePassword, generateUserPassword } = require("../helpers/bcrypt");
const { generateAuthToken } = require("../../auth/providers/jwt");

const DB = process.env.DB || "MONGODB";

const registerUser = async (normalizeUser) => {
  if (DB === "MONGODB") {
    try {
      let user = new User(normalizeUser);
      user.password = generateUserPassword(user.password);
      user = await user.save();
      user = pick(user, ["name", "email", "_id"]);
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const loginUser = async ({ email, password }) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findOne({ email });
      if (!user) throw new Error("Invalid email or password");
      const ValidPassword = comparePassword(password, user.password);
      if (!ValidPassword) throw new Error("Invalid email or password");

      const token = generateAuthToken(user);
      return Promise.resolve(token);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const getUsers = async () => {
  if (DB === "MONGODB") {
    try {
      const users = User.find({}, { password: 0, __v: 0 });
      // .where({
      //   isActive: true,
      // });
      if (!users) throw new Error("there are no users in the database!");

      return Promise.resolve(users);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const getUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findById(userId).select(["-password", "-__v"]);
      if (!user) throw new Error("could not find this user in the database!");
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const updateUser = async (userId, normlizeUser) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndUpdate(userId, normlizeUser, {
        new: true,
      }).select(["-password", "-__v"]);

      if (!user) throw new Error("could not find this user in the database!");
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const deleteUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { isActive: false },
        {
          new: true,
        }
      ).select(["-password", "-__v"]);

      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
