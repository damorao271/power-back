const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  avaliable: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Producto", productSchema);

function validateProduct(producto) {
  const schema = {
    genre: Joi.string().required(),
    type: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().min(1).required(),
    avaliable: Joi.number().min(0).required(),
  };
  return Joi.validate(producto, schema);
}

module.exports.Product = Product;
module.exports.validate = validateProduct;
module.exports.productSchema = productSchema;
