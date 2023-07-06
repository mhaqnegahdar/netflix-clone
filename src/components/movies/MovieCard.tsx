// Hooks / Packages
import Image from "next/image";

// Actions
import getCurrentUser from "@/actions/getCurrentUser";

// Types
import { MovieCardProps } from "@/types/props";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";

const MovieCard = async ({ movie }: MovieCardProps) => {
  const currentUser = await getCurrentUser();

  return (
    <article
      className="group bg-zinc-900
   col-span-1 relative h-[24vw]  md:h-[12vw]"
    >
      {/* Visible Image */}
      <figure className="h-full w-full cursor-pointer transition duration delay-300 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 overflow-hidden">
        <Image
          src={movie.thumbnailUrl}
          alt="Thumbnail"
          fill
          className="!static object-cover"
        />
      </figure>
      {/* Hover Image */}
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <figure
          className="cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[24vw]  md:h-[12vw]
          overflow-hidden"
        >
          <Image
            src={movie.thumbnailUrl}
            alt="Thumbnail"
            fill
            className="!static object-cover"
          />
        </figure>
        <main className="z-10 bg-zinc-800 p-2 lg:p-4 absolute  transition w-full shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            {/* Play Button */}
            <PlayButton movieId={movie.id} />
            {/* Heart Button*/}
            <FavoriteButton movieId={movie.id} currentUser={currentUser} />
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">{new Date().getFullYear()}</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[14px] lg:text-md">
              {movie.duration}
            </p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[14px] lg:text-md">{movie.genre}</p>
          </div>
        </main>
      </div>
    </article>
  );
};

export default MovieCard;
