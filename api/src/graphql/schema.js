import { makeExecutableSchema } from "graphql-tools";
import WorkerDef from "./typeDefs/worker.graphql";
import WorkerResolver from "./resolvers/worker";
import OrganizationDef from "./typeDefs/organization.graphql";
import OrganizationResolver from "./resolvers/organization";

const baseDef = `
  scalar JSON
  type Query
  type Mutation
`;

export default makeExecutableSchema({
  typeDefs: [
    baseDef,
    WorkerDef,
    OrganizationDef
  ],
  resolvers: [
    WorkerResolver,
    OrganizationResolver
  ]
});
