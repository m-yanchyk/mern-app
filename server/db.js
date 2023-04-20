const { connect } = require("mongoose");

const connectDb = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDb };
