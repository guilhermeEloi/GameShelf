import type { Game, GameStats } from "../types/game";

export const mockGames: Game[] = [
  {
    id: "1",
    title: "The Witcher 3: Wild Hunt",
    cover: "https://picsum.photos/seed/game1/300/200",
    platform: "PC",
    status: "playing",
    rating: 4,
    createdAt: "2024-01-10",
  },
  {
    id: "2",
    title: "Elden Ring",
    cover: "https://picsum.photos/seed/game2/300/200",
    platform: "PC",
    status: "completed",
    rating: 5,
    createdAt: "2024-02-05",
  },
  {
    id: "3",
    title: "Hollow Knight",
    cover: "https://picsum.photos/seed/game3/300/200",
    platform: "PS5",
    status: "playing",
    rating: 3,
    createdAt: "2024-03-12",
  },
  {
    id: "4",
    title: "Hades II",
    cover: "https://picsum.photos/seed/game4/300/200",
    platform: "PC",
    status: "wishlist",
    createdAt: "2024-03-20",
  },
  {
    id: "5",
    title: "Cyberpunk 2077",
    cover: "https://picsum.photos/seed/game5/300/200",
    platform: "PC",
    status: "dropped",
    rating: 2,
    createdAt: "2024-04-01",
  },
  {
    id: "6",
    title: "Celeste",
    cover: "https://picsum.photos/seed/game6/300/200",
    platform: "Switch",
    status: "completed",
    rating: 4,
    createdAt: "2024-04-15",
  },
];

export const mockStats: GameStats = {
  total: 47,
  playing: 3,
  completed: 28,
  favoriteGenre: "RPG",
};
