"use client";

import { FavoriteButtonProps } from "@/types/props";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useFavorite from "@/hooks/useFavorite";

const FavoriteButton = ({ movieId, currentUser }: FavoriteButtonProps) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    movieId,
    currentUser,
  });

  return (
    <button
      onClick={toggleFavorite}
      className="group/item w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      {hasFavorited ? (
        <AiOutlineMinus className="text-white" />
      ) : (
        <AiOutlinePlus className="text-white" />
      )}
    </button>
  );
};

export default FavoriteButton;
