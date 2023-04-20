import { gql } from "@apollo/client";

export const getAllProducts = gql`
  query Query {
    getAllProducts {
      id
      title
      description
    }
  }
`;
