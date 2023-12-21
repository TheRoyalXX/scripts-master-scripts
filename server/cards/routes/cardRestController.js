const express = require("express");
const { handleError } = require("../../utils/errorHandler");
const normalizeCard = require("../helpers/normlizeCard");

const {
  getCards,
  createCard,
  getCard,
  deleteCard,
  updateCard,
  likeCard,
  getMyCards,
} = require("../models/cardsDataAccessService");
const validateCard = require("../validations/cardValidationService");
const auth = require("../../auth/authService");
const Card = require("../models/mongodb/Card");
const normlizeCard = require("../helpers/normlizeCard");

const router = express.Router();

router.get("/my-cards", auth, async (req, res) => {
  try {
    const user = req.user;
    const _id = req.user._id;

    if (!user)
      return handleError(res, 403, "Authentication Error: Unauthorize user");

    const cards = await getMyCards(_id);
    return res.send(cards);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await getCard(id);
    return res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    let cards = await getCards();
    const activCards = cards.filter((cards) => cards.user_id.isActive === true);

    return res.send(activCards);
  } catch (error) {
    const { status } = error;
    return handleError(res, status || 500, error.message);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    let card = req.body;
    const user = req.user;

    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    card = await normlizeCard(card, user._id);
    card = await createCard(card);

    const fetchedCard = await getCard(card._id);

    return res.send(fetchedCard);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const cardId = req.params.id;
    const user = req.user;

    const card = await deleteCard(cardId, user);
    return res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    let card = req.body;
    const user = req.user;
    const { id } = req.params;
    const cardData = await Card.findOne({ _id: id });
    if (user._id != cardData.user_id) {
      const message =
        "Authorization Error: Only the user who created the card can update its details";
      return handleError(res, 403, message);
    }

    card = await updateCard(id, req.body);

    return res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const cardId = req.params.id;
    const userId = req.user._id;
    const card = await likeCard(cardId, userId);
    return res.send(card);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

module.exports = router;
