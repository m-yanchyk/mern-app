import { gql } from "apollo-server-express";

const product = gql`
  type Product {
    name: String
    description: String
    path: String
  }

  input ProductInput {
    name: String
    description: String
    path: String
  }

  type Query {
    getProducts: [Product]
  }

  type Mutation {
    createProduct(productInput: ProductInput): Product
  }
`;

export default product;
