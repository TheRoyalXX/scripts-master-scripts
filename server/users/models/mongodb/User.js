const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 256,
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 256,
      trim: true,
      lowercase: true,
    },
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    match: RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    ),
    trim: true,
    lowercase: true,
  },
  isActive: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false },
  isBusiness: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
