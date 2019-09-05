import mongoose from "mongoose";
import WorkerSchema from "./schemas/Worker";
import OrganizationSchema from "./schemas/Organization";

export default () => {
  mongoose.connect("mongodb://localhost:27017/linkedApp", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  } , err => {
    if (err) console.error("Error connecting to mongo!");
    // Models
    mongoose.model("Worker", WorkerSchema);
    mongoose.model("Organization", OrganizationSchema);
  });
}
