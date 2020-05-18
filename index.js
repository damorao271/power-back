const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const config = require("config");
const app = express();

mongoose
  .connect(config.get("apiEndPoint"))
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/users", users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
