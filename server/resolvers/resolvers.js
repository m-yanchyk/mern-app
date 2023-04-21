import productResolvers from "./productResolvers.js";
import fileResolvers from "./fileResolvers.js";

const resolvers = {
  ...fileResolvers,
  ...productResolvers,
};

export default resolvers;
