const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const products = require("./routes/products");
const config = require("config");
const app = express();

mongoose
  .connect(config.get("apiEndPoint"))
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/users", users);
app.use("/api/products", products);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// const merch = {
//   genero: ["M", "F"],
//   type: "Tipo",
//   name: "nombre",
//   // size = ["xs", "s","m","l","xl","xxl","xxxl"],
//   // color= ["black", "blue", "red", "pink"],
//   price: 12,
//   avaliable: 1,
//   date: "date",
// };
