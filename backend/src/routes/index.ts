import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";
import { gameRoutes } from "./game.routes";
import { shelfRoutes } from "./shelf.routes";

export const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/games", gameRoutes);
router.use("/shelf", shelfRoutes);
