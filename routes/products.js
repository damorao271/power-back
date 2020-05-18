const { Product, validate } = require("../models/productModel");
const express = require("express");
const router = express.Router();

// Get todos los productos
router.get("/", async (req, res) => {
  const products = await Product.find(req.body);
  res.send(products);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let product = new Product({
    genre: req.body.genre,
    type: req.body.type,
    name: req.body.name,
    price: req.body.price,
    avaliable: req.body.avaliable,
  });

  product = await product.save();
  res.send(product);
});

module.exports = router;
