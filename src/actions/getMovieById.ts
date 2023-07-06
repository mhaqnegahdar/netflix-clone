import { MovieIdParams } from "@/types/params";
import { prisma } from "@/utils/prismadb";

export default async function getMovieById(params: MovieIdParams) {
  const { movieId } = params;

  try {
    const movie = await prisma.movie.findUnique({
      where: { id: movieId },
    });

    //   if movie didn't exist
    if (!movie) {
      return null;
    }

    return movie;
  } catch (error: any) {
    return null;
  }
}
