import express from "express";
import bodyParser from "body-parser";
import headersMiddleware from "./middleware/headers";
import mongooseSetup from "./db/setup";
import graphqlServer from "./graphql/server";

mongooseSetup();

const app = express();
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(headersMiddleware);

graphqlServer(app);

app.listen(8000, () => console.log("Graphql API listening on port http://localhost:8000/graphql"));
