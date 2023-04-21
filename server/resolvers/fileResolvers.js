import File from "../models/File.js";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import { createWriteStream } from "fs";

const fileResolvers = {
  Upload: GraphQLUpload,
  Query: {
    async getFiles() {
      return await File.find();
    },
  },
  Mutation: {
    async createFile(_, { file }) {
      const { createReadStream, filename, mimetype, encoding } = await file;

      const uploadPath = `images/${filename}`;
      const readStream = createReadStream();
      const writeStream = createWriteStream(uploadPath);

      await new Promise((resolve, reject) => {
        readStream.pipe(writeStream).on("finish", resolve).on("error", reject);
      });
      const newFile = new File({
        filename,
        mimetype,
        encoding,
        path: uploadPath,
      });

      await newFile.save();

      return newFile;
    },
  },
};

export default fileResolvers;
