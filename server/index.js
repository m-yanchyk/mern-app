import { ApolloServer } from "apollo-server-express";
import { connect } from "mongoose";
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/resolvers.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";

const DB_URL =
  "mongodb+srv://Mykola:11october@cluster0.fbiyxaj.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5005;

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await connect(DB_URL).then(() => console.log("MongoDB started!"));
  await server.start();
  const app = express();

  app.use(graphqlUploadExpress());
  app.use("/images", express.static("images"));
  app.use(express.json());
  app.use(bodyParser.json());
  server.applyMiddleware({ app });

  app.use(cors());

  await new Promise((r) => app.listen({ port: PORT }, r));

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startServer();
