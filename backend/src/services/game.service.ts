import { gameRepository } from "../repositories/game.repository";
import { igdbFetch } from "../lib/igdb";

function formatGame(game: any) {
  return {
    rawgId: String(game.id),
    title: game.name,
    cover: game.cover?.url
      ? `https:${game.cover.url.replace("t_thumb", "t_cover_big")}`
      : undefined,
    releaseYear: game.first_release_date
      ? new Date(game.first_release_date * 1000).getFullYear().toString()
      : undefined,
    genre: game.genres?.[0]?.name ?? undefined,
    developer:
      game.involved_companies?.find((c: any) => c.developer)?.company?.name ??
      undefined,
  };
}

export const gameService = {
  async search(query: string) {
    const games = await igdbFetch(
      "/games",
      `search "${query}";
       fields name, cover.url, first_release_date, genres.name, involved_companies.developer, involved_companies.company.name;
       where version_parent = null;
       limit 5;`,
    );

    return games.map(formatGame);
  },

  async getOrCreate(rawgId: string) {
    const existing = await gameRepository.findByRawgId(rawgId);
    if (existing) return existing;

    const games = await igdbFetch(
      "/games",
      `fields name, cover.url, first_release_date, genres.name, involved_companies.developer, involved_companies.company.name;
       where id = ${rawgId};
       limit 1;`,
    );

    if (!games.length) {
      throw new Error("Jogo não encontrado");
    }

    return gameRepository.upsert(formatGame(games[0]));
  },
};
