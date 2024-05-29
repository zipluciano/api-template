import express, { Request, Response } from "express";

const usersRoutes = express.Router();

usersRoutes.get("/users", (req: Request, res: Response) => {
  return res.json({ message: "hello from users" });
});

export default usersRoutes;
