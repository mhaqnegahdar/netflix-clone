import { User } from "@prisma/client";

type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
  createdAt: string;
  updatedAt: string;
  emailVerified?: string | null;
};

//Export
export type { SafeUser };
