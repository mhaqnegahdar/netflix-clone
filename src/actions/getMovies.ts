import { prisma } from "@/utils/prismadb";

// Get Session

// Get Current User
export default async function getMovies() {
  try {
    // get all the movies
    const movies = await prisma.movie.findMany();

    return movies;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
