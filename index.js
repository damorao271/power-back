const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost/power")
  .then(() => console.log("Conectado a MongoDB ..."))
  .catch((err) => console.error("Could not connect to  MongoDB ..."));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
