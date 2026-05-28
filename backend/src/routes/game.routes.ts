import { Router } from "express";
import { gameController } from "../controllers/game.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const gameRoutes = Router();

gameRoutes.use(authMiddleware);

gameRoutes.get("/search", gameController.search);
