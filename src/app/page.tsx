//Hooks

//Actions
import getCurrentUser from "@/actions/getCurrentUser";
import getMovies from "@/actions/getMovies";
import getFavoriteMovies from "@/actions/gatFavoriteMovies";

// Components
import Billboard from "@/components/common/billboard/Billboard";
import NavBar from "@/components/common/layout/header/NavBar";
import MovieList from "@/components/movies/MovieList";

export default async function Home() {
  const currentUser = await getCurrentUser();
  const movies = await getMovies();
  const favMovies = await getFavoriteMovies();

  return (
    <>
      <NavBar currentUser={currentUser!} />
      <Billboard />
      <section className="pb-40">
        <MovieList title="Trending Now" movies={movies} />
        <MovieList title="Your Favorites" movies={favMovies} />
      </section>
    </>
  );
}
