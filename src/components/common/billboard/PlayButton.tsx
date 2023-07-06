"use client";

// Hooks/Packages
import { useRouter } from "next/navigation";

// Icons
import { BsFillPlayFill } from "react-icons/bs";

// Types
import { MovieIdParams } from "@/types/params";

const PlayButton = ({ movieId }: MovieIdParams) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/movies/${movieId}`)}
      className="bg-white text-black  rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-sm lg:text-lg font-semibold flex flex-row gap-1 items-center hover:bg-opacity-90 transition"
    >
      <BsFillPlayFill />
      Play
    </button>
  );
};

export default PlayButton;
