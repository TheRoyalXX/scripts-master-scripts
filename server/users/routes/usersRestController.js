const express = require("express");
const normlizeUser = require("../helpers/normlizeUser");
const {
  registerUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../models/userDataService");
const { handleError } = require("../../utils/errorHandler");
const loginValidation = require("../validation/loginValidation");
const auth = require("../../auth/authService");
const {
  deleteAllUserCards,
} = require("../../cards/models/cardsDataAccessService");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let user = req.body;
    user = normlizeUser(user);
    user = await registerUser(user);

    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = req.body;
    const { error } = loginValidation(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const token = await loginUser(req.body);
    return res.send(token);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const { isAdmin } = req.user;
    if (!isAdmin)
      return handleError(
        res,
        403,
        "Authorization error: you must be an admin to get all the users"
      );
    const users = await getUsers();
    return res.send(users);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const { _id, isAdmin } = req.user;
    let userId = req.params.id;

    if (_id !== userId && !isAdmin)
      return handleError(
        res,
        403,
        "Authorization error: you must be an admin to get the user"
      );
    let user = await getUser(userId);
    const filterUser = {
      name: { firstName: user.name.firstName, lastName: user.name.lastName },
      isActive: user.isActive,
      isAdmin: user.isAdmin,
      isBusiness: user.isBusiness,
      _id: user._id,
      email: user.email,
      imageUrl: user.imageUrl,
      phone: user.phone,
    };
    return res.send(filterUser);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const { _id, isAdmin } = req.user;
    const userId = req.params.id;
    let user = req.body;

    if (_id !== userId && !isAdmin)
      throw new Error("only the user or admin can update the user details");
    user = normlizeUser(user);

    user = await updateUser(userId, user);

    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const { _id, isAdmin } = req.user;
    const userId = req.params.id;
    if (_id !== userId && !isAdmin)
      throw new Error(
        "only the user who create the profile or an admin user can delete the user"
      );

    const user = await deleteUser(userId);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = router;
