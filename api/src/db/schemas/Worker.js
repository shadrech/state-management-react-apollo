import mongoose from "mongoose";
import shortid from "shortid";

const schema = new mongoose.Schema({
  _id: {
    type: String,
    "default": shortid.generate
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    min: 6,
    unique: true,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    min: 100,
    trim: true
  },
  skills: [String],
  organization: String
});

class Worker {

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}

schema.loadClass(Worker);

export default schema;

