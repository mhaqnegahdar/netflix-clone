"use client";
// Iconst
import { BsFillPlayFill } from "react-icons/bs";

const PlayButton = () => {
  return (
    <button
      className="w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
      onClick={() => {}}
    >
      <BsFillPlayFill size={30} />
    </button>
  );
};

export default PlayButton;
