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

interface MovieIdParams {
  movieId: string;
}

export type { FavoriteIdParams, UseFavoriteParams, MovieIdParams };
