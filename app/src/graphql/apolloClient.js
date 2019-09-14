import ApolloClient from "apollo-boost";
import fragment from "./queries/workerFragment.graphql";

export default new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  clientState: {
    resolvers: {
      Worker: {
        isOpen: () => false
      },
      Mutation: {
        setWorkerOpen: (root, { id, isOpen }, { cache, getCacheKey }) => {
          const cacheId = getCacheKey({ __typename: "Worker", id });
          const worker = cache.readFragment({ fragment, id: cacheId });
          const data = { ...worker, isOpen };
          cache.writeData({ id: cacheId, data });
          return null;
        }
      }
    }
  }
});
