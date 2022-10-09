import { Router } from "express";
import { friendsRouter } from "./friendsRouter"

export const rootRouter = Router();

rootRouter.use("/friends", friendsRouter);