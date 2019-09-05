export default {
  Query: {
    organization: (root, args, { models: { Organization } }) => Organization.fetch({ id: args.id }),
    organizations: (root, { conditions = {}, opts }, { models: { Organization } }) => Organization.fetch(conditions, opts),
  },

  Mutation: {
    createOrganization: (root, args, { models: { Organization } }) => Organization.create(args.organization) 
  },

  Organization: {
    workers: (root, args, { models: { Worker } }) => Worker.fetch({ organization: root.id })
  }
}
