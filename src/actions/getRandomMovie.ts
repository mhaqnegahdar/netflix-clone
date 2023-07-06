import { prisma } from "@/utils/prismadb";

// Get Session

// Get Current User
export default async function getRandomMovie() {
  try {
    const movieCount = await prisma.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    // get the random movie
    const randomMovies = await prisma.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return randomMovies[0];

    // If User Didn't Exists
  } catch (error) {
    return null;
  }
}
