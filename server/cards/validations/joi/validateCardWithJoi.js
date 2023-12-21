const Joi = require("joi");

const validateCardWithJoi = (card) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(50).required(),
    category: Joi.any().required(),
    difficulty: Joi.any().required(),
    language: Joi.string().min(2).max(20).required(),
    developer: Joi.string().min(2).max(30).required(),
    code: Joi.string().allow("").min(10).required(),
    fullScriptLink: Joi.string().allow(""),
  });
  return schema.validate(card);
};

module.exports = validateCardWithJoi;
