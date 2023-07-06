//Hooks / Packages
import { isEmpty } from "lodash";

// Types
import { MovieListProps } from "@/types/props";

// Components
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }: MovieListProps) => {
  //if Movies was Empty
  if (isEmpty(movies)) {
    return null;
  }

  return (
    <section className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
