import mongoose from "mongoose";

export function fetch(opts) {
  const Worker = mongoose.model("Worker");
  return Worker.fetch();
}

export function create(fields) {
  const Worker = mongoose.model("Worker");
  const worker = new Worker({
    firstName: fields.firstName,
    lastName: fields.lastName,
    email: fields.email,
    bio: fields.bio,
    skills: fields.skills,
    organizationId: fields.organizationId
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
