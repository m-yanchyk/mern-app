import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String },
  description: { type: String },
  path: { type: String },
});

export default model("Product", ProductSchema);
