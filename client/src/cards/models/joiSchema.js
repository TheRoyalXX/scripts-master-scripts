import Joi from "joi";

const createScriptSchema = {
  title: Joi.string().min(2).max(50).required(),
  category: Joi.any().required(),
  difficulty: Joi.any().required(),
  language: Joi.string().min(2).max(20).required(),
  developer: Joi.string().min(2).max(30).required(),
  code: Joi.string().allow("").min(10).required(),
  fullScriptLink: Joi.string().allow(""),
  user_id: Joi.string().allow(""),
  userFirstName: Joi.string().allow(""),
  userLastName: Joi.string().allow(""),
  userImage: Joi.string().allow(""),
  userEmail: Joi.string().allow(""),
};

export default createScriptSchema;
