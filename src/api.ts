import express, { Express } from "express";
import morgan from "morgan";
import v1Routes from "@routes/v1/routes";

const app: Express = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(v1Routes);

export default app;
