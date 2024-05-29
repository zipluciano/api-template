import express from "express";
import usersRoutes from "@routes/v1/users/users.routes";

const v1Routes = express.Router();

v1Routes.use("/api/v1", [usersRoutes]);

export default v1Routes;
