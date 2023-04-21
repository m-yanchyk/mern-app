import { gql } from "@apollo/client";

export const getProducts = gql`
  query Query {
    getProducts {
      description
      name
      path
    }
  }
`;
