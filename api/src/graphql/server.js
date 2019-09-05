import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import * as Worker from "../models/Worker";
import * as Organization from "../models/Organization";

export default app => {
  const server = new ApolloServer({
    schema,
    context: () => ({
      models: {
        Worker,
        Organization
      }
    })
  });
  server.applyMiddleware({ app });
}
