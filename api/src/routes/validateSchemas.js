export default {
  NewWorkerSchema: {
    type: "object",
    properties: {
      firstname: {type: "string", title: "First Name field"},
      lastname: {type: "string", title: "Last Name field"},
      email: {type: "string", title: "Email"},
      bio: {type: "string", minLength: 100, title: "Bio"},
      skills: {type: "array", title: "Skills"},
      organizationId: {type: "string", title: "Organization Id"}
    },
    required: ["firstname", "lastname", "email", "bio", "skills"]
  },

  EditWorkerSchema: {
    type: "object",
    properties: {
      firstname: {type: "string"},
      lastname: {type: "string"},
      email: {type: "string"}
    }
  }
}
