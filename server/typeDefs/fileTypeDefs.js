import {gql} from "apollo-server-express"

const file = gql`
    scalar Upload
    type File {
        id: ID!
        filename: String!
        mimetype: String!
        encoding: String!
        path: String!
    }

    type Query {
        getFiles: [File]
    }

    type Mutation {
        createFile(file: Upload): File
    }
`;

export default file;
