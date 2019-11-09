import fragment from "./queries/workerFragment.graphql";

export default {
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
