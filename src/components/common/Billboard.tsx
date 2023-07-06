import getRandomMovie from "@/actions/getRandomMovie";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Billboard = async () => {
  const movie = await getRandomMovie();

  return (
    <section className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={movie?.thumbnailUrl}
        src={movie?.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ms-4 md:ms-16">
        <p className="text-white text-1xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-xl">
          {movie?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movie?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row gap-1 items-center hover:bg-opacity-20 transition">
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
