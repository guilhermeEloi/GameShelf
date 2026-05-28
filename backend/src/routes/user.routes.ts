import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const userRoutes = Router();

userRoutes.use(authMiddleware);

userRoutes.get("/me", userController.getProfile);
userRoutes.put("/me", userController.updateProfile);
userRoutes.patch("/me/password", userController.updatePassword);
userRoutes.delete("/me", userController.deleteAccount);
