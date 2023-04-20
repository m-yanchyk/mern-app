require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { connectDb } = require("./db");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { ApolloServer } = require("apollo-server-express");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

const start = async () => {
  try {
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await connectDb();
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: "/api" });

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
