import { Movie } from "@prisma/client";
import { SafeUser } from "./database";

type ModalState = {
  isOpen: boolean;
  movie: Movie;
  currentUser: SafeUser | null;
};

type InfoModalPayload = {
  movie: Movie;
  currentUser: SafeUser | null;
};

export type { ModalState, InfoModalPayload };
