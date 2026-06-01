import { prisma } from "../lib/prisma";
import { ShelfStatus } from "../types/shelf";

export const shelfRepository = {
  async findAllByUser(userId: string) {
    return prisma.shelfGame.findMany({
      where: { userId },
      include: { game: true },
      orderBy: { updatedAt: "desc" },
    });
  },

  async findByUserAndGame(userId: string, gameId: string) {
    return prisma.shelfGame.findUnique({
      where: { userId_gameId: { userId, gameId } },
      include: { game: true },
    });
  },

  async findById(id: string) {
    return prisma.shelfGame.findUnique({
      where: { id },
      include: { game: true },
    });
  },

  async create(data: {
    userId: string;
    gameId: string;
    status: ShelfStatus;
    platform: string;
    rating?: number;
    review?: string;
  }) {
    return prisma.shelfGame.create({
      data,
      include: { game: true },
    });
  },

  async update(
    id: string,
    data: {
      status?: ShelfStatus;
      platform?: string;
      rating?: number;
      review?: string;
    },
  ) {
    return prisma.shelfGame.update({
      where: { id },
      data,
      include: { game: true },
    });
  },

  async delete(id: string) {
    return prisma.shelfGame.delete({ where: { id } });
  },

  async getStats(userId: string) {
    const [total, playing, completed, dropped, wishlist] = await Promise.all([
      prisma.shelfGame.count({ where: { userId } }),
      prisma.shelfGame.count({ where: { userId, status: "playing" } }),
      prisma.shelfGame.count({ where: { userId, status: "completed" } }),
      prisma.shelfGame.count({ where: { userId, status: "dropped" } }),
      prisma.shelfGame.count({ where: { userId, status: "wishlist" } }),
    ]);

    const favoriteGenre = await prisma.shelfGame.groupBy({
      by: ["gameId"],
      where: { userId },
      _count: { gameId: true },
      orderBy: { _count: { gameId: "desc" } },
      take: 1,
    });

    return { total, playing, completed, dropped, wishlist };
  },
};
