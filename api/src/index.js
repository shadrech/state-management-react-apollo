import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import headersMiddleware from "./middleware/headers";
import mongooseSetup from "./db/setup";
import validationErrorMiddleware from "../src/middleware/validationError";

const app = express();
mongooseSetup();

app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(headersMiddleware);
app.use(validationErrorMiddleware);
routes(app);

app.listen(8000, () => console.log("Listening on port 8000"));
