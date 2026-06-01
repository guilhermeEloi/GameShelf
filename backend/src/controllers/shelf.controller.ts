import { Request, Response } from "express";
import { shelfService } from "../services/shelf.service";
import { ShelfStatus } from "../types/shelf";

export const shelfController = {
  async getShelf(req: Request, res: Response) {
    try {
      const shelf = await shelfService.getShelf(req.userId);
      return res.status(200).json(shelf);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async getStats(req: Request, res: Response) {
    try {
      const stats = await shelfService.getStats(req.userId);
      return res.status(200).json(stats);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const shelfGame = await shelfService.getById(id, req.userId);
      return res.status(200).json(shelfGame);
    } catch (error) {
      if (error instanceof Error) {
        const status = error.message === "Não autorizado" ? 403 : 404;
        return res.status(status).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async addToShelf(req: Request, res: Response) {
    try {
      const { rawgId, status, platform, rating, review } = req.body;

      if (!rawgId || !status || !platform) {
        return res
          .status(400)
          .json({ message: "rawgId, status e platform são obrigatórios" });
      }

      const validStatuses = ["playing", "completed", "wishlist", "dropped"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Status inválido" });
      }

      const shelfGame = await shelfService.addToShelf({
        userId: req.userId,
        rawgId,
        status: status as ShelfStatus,
        platform,
        rating,
        review,
      });

      return res.status(201).json(shelfGame);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async updateShelfGame(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const { status, platform, rating, review } = req.body;

      const shelfGame = await shelfService.updateShelfGame(id, req.userId, {
        status: status as ShelfStatus | undefined,
        platform,
        rating,
        review,
      });

      return res.status(200).json(shelfGame);
    } catch (error) {
      if (error instanceof Error) {
        const status = error.message === "Não autorizado" ? 403 : 404;
        return res.status(status).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async removeFromShelf(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      await shelfService.removeFromShelf(id, req.userId);
      return res.status(200).json({ message: "Jogo removido da estante" });
    } catch (error) {
      if (error instanceof Error) {
        const status = error.message === "Não autorizado" ? 403 : 404;
        return res.status(status).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },
};
