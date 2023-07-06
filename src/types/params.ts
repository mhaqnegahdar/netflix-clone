import { SafeUser } from "./database";

interface FavoriteIdParams {
  params: {
    movieId?: string;
  };
}

interface UseFavoriteParams {
  movieId: string;
  currentUser?: SafeUser | null;
}

export type { FavoriteIdParams, UseFavoriteParams };
