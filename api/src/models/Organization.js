import mongoose from "mongoose";

export function fetch(conditions = {}, options = {}) {
  const Organization = mongoose.model("Organization");
  return Organization.find(conditions, null, options);
}

export async function create(fields) {
  const organization = await mongoose.model("Organization")
    .create([{
      name: fields.name,
      description: fields.description,
      logo: fields.logo
    }]);
  await mongoose.model("Worker")
    .updateMany({
      _id: {
        $in: fields.workers
      }
    }, { organization: organization[0].id });
  return organization[0];
}

export function remove(id) {
  return mongoose.model("Organization")
    .findByIdAndRemove(id);
}
