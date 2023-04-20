const Product = require("./models/Product");
const File = require("./models/File");
const shortid = require("shortid");
const { createWriteStream, mkdir } = require("fs");

const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = shortid.generate();
  const path = `images/${id}-${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path, filename, mimetype }))
      .on("error", reject)
  );
};

const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype } = await upload;
  const stream = createReadStream();
  const file = await storeUpload({ stream, filename, mimetype });
  return file;
};

const resolvers = {
  Query: {
    getAllProducts: async () => {
      const products = await Product.find();
      return products;
    },
  },
  Mutation: {
    async createProduct(_, { product }) {
      const { title, description, count, discount } = product;

      const newProduct = new Product({ title, description, count, discount });
      await newProduct.save();
      return newProduct;
    },
    uploadFile: async (_, { file }) => {
      console.log(file)
      mkdir("images", { recursive: true }, (err) => {
        if (err) throw err;
      });

      const upload = await processUpload(file);
      await File.create(upload);
      return upload;
    },
  },
};

module.exports = {
  resolvers,
};
