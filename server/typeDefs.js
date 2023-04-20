const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload
  type Product {
    id: ID
    title: String
    description: String
    count: Int
    discount: Int
  }

  type File {
    id: ID!
    filename: String!
    mimetype: String!
    path: String!
  }

  type Query {
    getAllProducts: [Product]
    files: [File]
  }

  input ProductInput {
    title: String
    description: String
    count: Int
    discount: Int
  }

  type Mutation {
    createProduct(product: ProductInput): Product
    uploadFile(file: Upload!): File
  }
`;

module.exports = { typeDefs };
