import mongoose from "mongoose";
import shortid from "shortid";
import * as Worker from "../../models/Worker";

const schema = new mongoose.Schema({
  _id: {
    type: String,
    "default": shortid.generate
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  logo: String
});

class Organization {

  get getWorkers() {
    return Worker.fetch({ organizationId: this._id });
  }

}

schema.loadClass(Organization);

export default schema;
