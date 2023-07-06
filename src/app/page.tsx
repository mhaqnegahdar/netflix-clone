//Hooks
import { redirect } from "next/navigation";

//Actions
import getCurrentUser from "@/actions/getCurrentUser";
import getMovies from "@/actions/getMovies";

// Components
import Billboard from "@/components/common/Billboard";
import NavBar from "@/components/common/layout/header/NavBar";
import MovieList from "@/components/movies/MovieList";

export default async function Home() {
  const currentUser = await getCurrentUser();
  const movies = await getMovies();

  //if user is not logged in
  if (!currentUser) {
    redirect("/auth");
  }

  return (
    <>
      <NavBar currentUser={currentUser} />
      <Billboard />
      <section className="pb-40">
        <MovieList title="Trending Movies" movies={movies} />
      </section>
    </>
  );
}
