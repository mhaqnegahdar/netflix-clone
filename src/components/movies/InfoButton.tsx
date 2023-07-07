"use client";

// Hooks/Packages
import { useCallback } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { onOpen } from "@/redux/modal/infoModalSlice";

// Icons
import { BsChevronDown } from "react-icons/bs";

// Types
import { InfoButtonProps } from "@/types/props";

const InfoButton = ({ movie, currentUser }: InfoButtonProps) => {
  // Redux
  const dispatch = useAppDispatch();

  // ---Actions---
  // Close
  const handleOpen = useCallback(() => {
    dispatch(onOpen({ movie, currentUser }));
  }, [dispatch, movie, currentUser]);

  return (
    <button
      onClick={() => handleOpen()}
      className="group/item w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center ms-auto transition hover:border-neutral-300"
    >
      <BsChevronDown className="text-white" size={20} />
    </button>
  );
};

export default InfoButton;
