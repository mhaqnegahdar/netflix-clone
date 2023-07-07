// Actions
import getMovieById from "@/actions/getMovieById";

// Types
import { MovieSingleProps } from "@/types/props";

// Components
import EmptyState from "@/components/common/EmptyState";
import BackHomeButton from "@/components/movies/BackHomeButton";

const Watch = async ({ params }: MovieSingleProps) => {
  const movie = await getMovieById(params);

  // If movie did not exist
  if (!movie) {
    return (
      <EmptyState subtitle="Back to home" showBtn btnLabel="Home" btnPath="/" />
    );
  }

  return (
    <main className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <BackHomeButton />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light me-1">Watching</span> {movie.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={movie.videoUrl}
      ></video>
    </main>
  );
};

export default Watch;
