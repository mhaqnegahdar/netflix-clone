//Libraries
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

//Types
import { UseFavoriteParams } from "@/types/params";

const useFavorite = ({ movieId, currentUser }: UseFavoriteParams) => {
  const router = useRouter();

  //Check if listing is favorited
  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  //Toggle favorites
  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      //open LoginModal if user was logged out
      if (!currentUser) {
        toast.error("Please Login first!");
        return null;
      }

      try {
        const api = `/api/favorites/${movieId}`;
        let request;
        let message = "";

        //Send request based on the favorite state
        if (hasFavorited) {
          request = () => axios.delete(api);
          message = "Removed from favorites";
        } else {
          request = () => axios.post(api);
          message = "Added to favorites";
        }
        await request();
        router.refresh();
        toast.success(message);
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, movieId, router]
  );

  return { hasFavorited, toggleFavorite };
};

export default useFavorite;
