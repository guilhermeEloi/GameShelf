import { Request, Response } from "express";
import { gameService } from "../services/game.service";

export const gameController = {
  async search(req: Request, res: Response) {
    try {
      const { q } = req.query;

      if (!q || typeof q !== "string") {
        return res
          .status(400)
          .json({ message: "Parâmetro de busca obrigatório" });
      }

      const games = await gameService.search(q);
      return res.status(200).json(games);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },
};
