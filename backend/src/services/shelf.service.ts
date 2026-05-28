import { ShelfStatus } from "../types/shelf";
import { shelfRepository } from "../repositories/shelf.repository";
import { gameService } from "./game.service";

interface AddToShelfDTO {
  userId: string;
  rawgId: string;
  status: ShelfStatus;
  platform: string;
  rating?: number;
  review?: string;
}

interface UpdateShelfDTO {
  status?: ShelfStatus;
  platform?: string;
  rating?: number;
  review?: string;
}

export const shelfService = {
  async getShelf(userId: string) {
    return shelfRepository.findAllByUser(userId);
  },

  async getStats(userId: string) {
    return shelfRepository.getStats(userId);
  },

  async getById(id: string, userId: string) {
    const shelfGame = await shelfRepository.findById(id);

    if (!shelfGame) {
      throw new Error("Jogo não encontrado na estante");
    }

    if (shelfGame.userId !== userId) {
      throw new Error("Não autorizado");
    }

    return shelfGame;
  },

  async addToShelf({
    userId,
    rawgId,
    status,
    platform,
    rating,
    review,
  }: AddToShelfDTO) {
    const game = await gameService.getOrCreate(rawgId);

    const existing = await shelfRepository.findByUserAndGame(userId, game.id);

    if (existing) {
      throw new Error("Jogo já está na sua estante");
    }

    return shelfRepository.create({
      userId,
      gameId: game.id,
      status,
      platform,
      rating,
      review,
    });
  },

  async updateShelfGame(id: string, userId: string, data: UpdateShelfDTO) {
    const shelfGame = await shelfRepository.findById(id);

    if (!shelfGame) {
      throw new Error("Jogo não encontrado na estante");
    }

    if (shelfGame.userId !== userId) {
      throw new Error("Não autorizado");
    }

    return shelfRepository.update(id, data);
  },

  async removeFromShelf(id: string, userId: string) {
    const shelfGame = await shelfRepository.findById(id);

    if (!shelfGame) {
      throw new Error("Jogo não encontrado na estante");
    }

    if (shelfGame.userId !== userId) {
      throw new Error("Não autorizado");
    }

    await shelfRepository.delete(id);
  },
};
