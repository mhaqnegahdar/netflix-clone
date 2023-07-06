import getRandomMovie from "@/actions/getRandomMovie";

// Components
import InfoButton from "./InfoButton";
import PlayButton from "./PlayButton";

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
        <p className="text-white text-2xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-xl">
          {movie?.title}
        </p>
        <p className="text-white text-[16px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movie?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          {movie?.id && <PlayButton movieId={movie?.id} />}
          {movie?.id && <InfoButton movieId={movie?.id} />}
        </div>
      </div>
    </section>
  );
};

export default Billboard;
