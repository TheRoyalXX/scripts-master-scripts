const mongoose = require("mongoose");
const { DEFAULT_VALIDATION } = require("../../helpers/mongooseValidator");

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  category: DEFAULT_VALIDATION,
  difficulty: DEFAULT_VALIDATION,
  code: {
    type: String,
    require: true,
  },
  language: {
    type: String,
  },    
  developer: {
    type: String,
  }, 
  fullScriptLink: {
    type: String,
  }, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [String],


  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Card = mongoose.model("card", CardSchema);

module.exports = Card;
