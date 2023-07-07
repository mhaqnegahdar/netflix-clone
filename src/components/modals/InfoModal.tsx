"use client";
// Hooks/ Packages
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectIsOpen,
  selectMovie,
  onClose,
  selectCurrentUser,
} from "@/redux/modal/infoModalSlice";

// Icons
import { AiOutlineClose } from "react-icons/ai";

// Components
import PlayButton from "../common/billboard/PlayButton";
import FavoriteButton from "../movies/FavoriteButton";

const InfoModal = () => {
  // ---States---
  // Redux
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsOpen);
  const movie = useAppSelector(selectMovie);
  const currentUser = useAppSelector(selectCurrentUser);
  // states
  const [visible, setVisible] = useState<boolean>(!!isOpen);
  useEffect(() => {
    setVisible(!!isOpen);
  }, [isOpen]);
  // ---Actions---
  // Close
  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      dispatch(onClose());
    }, 300);
  }, [dispatch]);

  // If modal is closed
  if (!isOpen) {
    return null;
  }

  return (
    <div className="z-50 transition duration-300 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        {/* Container */}
        <div
          className={`${
            visible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          {/* Movie */}

          <div className="relative h-96">
            <video
              autoPlay
              muted
              loop
              poster={movie.thumbnailUrl}
              src={movie.videoUrl}
              className="w-full brightness-[60%] object-cover h-full"
            ></video>
            {/* Close Butto */}
            <button
              onClick={() => handleClose()}
              className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineClose className="text-white " size={20} />
            </button>

            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-80">
                {movie.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={movie.id} />
                <FavoriteButton movieId={movie.id} currentUser={currentUser} />
              </div>
            </div>
          </div>
          {/* Info */}
          <div className="py-8 px-12">
            <p className="text-green-400 font-semibold text-lg">New</p>
            <p className=" text-white text-lg">{movie.duration}</p>
            <p className=" text-white text-lg">{movie.genre}</p>
            <p className=" text-white text-lg">{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
