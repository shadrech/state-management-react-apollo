import ApolloClient from "apollo-boost";
import resolvers from "./resolvers";

export default new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  clientState: {
    resolvers
  }
});
