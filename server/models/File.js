import { model, Schema } from "mongoose";

const FileSchema = new Schema({
  filename: { type: String },
  mimetype: { type: String },
  encoding: { type: String },
  path: { type: String },
});

export default model("File", FileSchema);
