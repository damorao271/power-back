const Joi = require("joi");
const mongoose = require("mongoose");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

const User = mongoose.model("User", userSchema);

// Funcion que valida las entradas del usuario
function validateUser(user) {
  const schema = {
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  };
  return Joi.validate(user, schema);
}

module.exports.userSchema = userSchema;
module.exports.validate = validateUser;
module.exports.User = User;
