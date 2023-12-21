const mongoose = require("mongoose");

const AddressSheman = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
  state: {
    type: String,
    minLength: 2,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
  city: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
  street: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
  HouseNumber: {
    type: String,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
});

module.exports = AddressSheman;
