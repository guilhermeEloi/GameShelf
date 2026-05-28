import { Router } from "express";
import { shelfController } from "../controllers/shelf.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const shelfRoutes = Router();

shelfRoutes.use(authMiddleware);

shelfRoutes.get("/", shelfController.getShelf);
shelfRoutes.get("/stats", shelfController.getStats);
shelfRoutes.get("/:id", shelfController.getById);
shelfRoutes.post("/", shelfController.addToShelf);
shelfRoutes.put("/:id", shelfController.updateShelfGame);
shelfRoutes.delete("/:id", shelfController.removeFromShelf);
