import Product from "../models/Product.js";
import File from "../models/File.js";

const productResolvers = {
  Query: {
    async getProducts() {
      return await Product.find();
    },
  },
  Mutation: {
    async createProduct(_, { productInput: { name, description, path } }) {
      const filePath = await File.findById(path);
      const res = await new Product({
        name,
        description,
        path: filePath.path,
      }).save();

      return {
        id: res._id,
        ...res._doc,
      };
    },
  },
};

export default productResolvers;
