require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(cors());

const PORT = process.env.PORT || 5010;

const ProductRoute = require("./routes/product");

app.use("/", ProductRoute);

async function start() {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(console.log("DB started!"))
      app.listen(PORT, () => console.log("Server started!"))
  } catch (err) {
    console.log(err);
  }
}

start();
