import { ValidationError, Validator } from "express-json-validator-middleware";
import schemas from "./validateSchemas";
import { getUser, removeUser, updateUser, createUser } from "../controllers/WorkerController";

export default router => {
  router.route("/users")
    .get(getUser)
    .post(createUser);
  
  router.route("/users/:id")
    .get(getUser)
    .put(updateUser)
    .delete(removeUser);
};
