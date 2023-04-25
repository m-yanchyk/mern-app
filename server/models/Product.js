const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: { type: String },
  description: { type: String },
  genre: { type: String },
  author: { type: String },
  publishing_house: { type: String },
  year: { type: String },
  language: { type: String },
  images: { type: Array },
});

module.exports = model("Product", ProductSchema);
