import { prisma } from "../lib/prisma";

export const gameRepository = {
  async findByRawgId(rawgId: string) {
    return prisma.game.findUnique({ where: { rawgId } });
  },

  async findById(id: string) {
    return prisma.game.findUnique({ where: { id } });
  },

  async upsert(data: {
    rawgId: string;
    title: string;
    cover?: string;
    developer?: string;
    releaseYear?: string;
    genre?: string;
  }) {
    return prisma.game.upsert({
      where: { rawgId: data.rawgId },
      update: data,
      create: data,
    });
  },
};
