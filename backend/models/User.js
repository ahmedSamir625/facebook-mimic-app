const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: { type: String, required: true, unique: false },
  password: { type: String, required: true },
  name: {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
  },
  phone: {
    code: {
      type: String,
      default: "+20",
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },

  birthdate: {
    type: Date,
    required: false,
  },
  gender: { type: String, required: false },
  country: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
