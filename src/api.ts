import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import v1Routes from "@routes/v1/routes";

const app: Express = express();

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

app.use(v1Routes);

export default app;
