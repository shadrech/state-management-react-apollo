export default {
  Query: {
    worker: (root, args, { models: { Worker } }) => Worker.fetch({ id: args.id }),
    workers: (root, { conditions = {}, opts }, { models: { Worker } }) => Worker.fetch(conditions, opts),
  },

  Mutation: {
    createWorker: (root, args, { models: { Worker } }) => Worker.create(args.worker),
    updateWorker: (root, args, { models: { Worker } }) => Worker.update(args.id, args.worker),
    deleteWorker: (root, args, { models: { Worker } }) => Worker.remove(args.id)
  },

  Worker: {
    organization: (root, args, { models: { Organization } }) => Organization.fetch({ _id: root.organization }).then(result => result[0])
  }
}
