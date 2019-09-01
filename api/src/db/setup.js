import mongoose from "mongoose";
import WorkerSchema from "./schemas/Worker";

export default () => {
  mongoose.connect("mongodb://localhost:27017/linkedApp", {
    useNewUrlParser: true,
    useCreateIndex: true
  } , err => {
    if (err) console.error("Error connecting to mongo!");
    // Models
    mongoose.model("Worker", WorkerSchema);
  });
}
