const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  count: {
    type: Number,
  },
  discount: {
    type: Number
  },
  image: {
    type: String
  }
});

module.exports = model("Product", ProductSchema);
