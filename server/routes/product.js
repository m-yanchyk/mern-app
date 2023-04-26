const router = require("express").Router();
const Product = require("../models/Product");
const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "images/");
  },
  filename(req, file, cb) {
    const mimetype = file.mimetype;
    const res = mimetype.split("/")[1];
    const fileName = `${Date.now().toString(32)}_${Math.random().toString(
      32
    )}.${res}`;
    cb(null, fileName);
  },
});

const types = ["image/png", "image/jpeg", "image/jpg"];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else cb(null, false);
};

const upload = multer({ storage: storage, fileFilter });

router.get("/api/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/product", upload.array("images", 10), async (req, res) => {
  try {
    const {
      name,
      description,
      genre,
      author,
      publishing_house,
      year,
      language,
      binding,
      book_format,
      page_numbers,
      amount,
    } = req.body;

    const images = [];

    for (const file of req.files) {
      images.push(file.filename);
    }

    const newProduct = new Product({
      name,
      description,
      genre,
      author,
      publishing_house,
      year,
      language,
      binding,
      book_format,
      page_numbers,
      amount,
      images,
    });

    await newProduct.save();

    res.json(newProduct);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
