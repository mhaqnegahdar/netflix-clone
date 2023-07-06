import getCurrentUser from "./getCurrentUser";
import { prisma } from "@/utils/prismadb";

export default async function getFavoriteMovies() {
  try {
    const currentUser = await getCurrentUser();
    // if user is not logged in
    if (!currentUser) {
      return [];
    }

    //get all the user's favorites by id
    const favorites = await prisma.movie.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    return favorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
