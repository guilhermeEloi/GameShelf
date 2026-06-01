export type GameStatus = "playing" | "completed" | "wishlist" | "dropped";

export interface Game {
  id: string;
  title: string;
  cover: string;
  platform: string;
  status: GameStatus;
  rating?: number;
  review?: string;
  createdAt: string;
}

export interface GameStats {
  total: number;
  playing: number;
  completed: number;
  favoriteGenre: string;
}
