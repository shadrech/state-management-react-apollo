import mongoose from "mongoose";

export function fetch(conditions = {}, options = {}) {
  return mongoose.model("Worker")
    .find(conditions, null, options);
}

export function create(fields) {
  const Worker = mongoose.model("Worker");
  const worker = new Worker({
    firstName: fields.firstName,
    lastName: fields.lastName,
    email: fields.email,
    bio: fields.bio,
    skills: fields.skills,
    organization: fields.organization
  });

  return worker.save();
}

export function update(id, fields) {
  return mongoose.model("Worker")
    .findByIdAndUpdate(id, fields, { new: true });
}

export function remove(id) {
  return mongoose.model("Worker")
    .findByIdAndRemove(id);
}
