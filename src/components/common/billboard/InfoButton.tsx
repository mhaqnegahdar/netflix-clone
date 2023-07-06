"use client";

// Hooks/Packages
import { useRouter } from "next/navigation";

// Icons
import { AiOutlineInfoCircle } from "react-icons/ai";

// Types
import { MovieIdParams } from "@/types/params";

const InfoButton = ({ movieId }: MovieIdParams) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/movies/${movieId}`)}
      className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-sm lg:text-lg font-semibold flex flex-row gap-1 items-center hover:bg-opacity-20 transition"
    >
      <AiOutlineInfoCircle />
      More Info
    </button>
  );
};

export default InfoButton;
