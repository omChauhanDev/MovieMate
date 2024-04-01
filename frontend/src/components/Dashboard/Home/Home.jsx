import LatestMovies from "./LatestMovies";
import MainBanner from "./MainBanner";
import RecommendedMovies from "./RecommendedMovies";

export const Home = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center font-Outfit text-xl">
      <div className="min-h-[calc(100vh-64px)] h-full w-full pt-10 pl-12 pr-4">
        <h1 className="text-3xl font-semibold">Latest Movies</h1>
        <MainBanner />
        <LatestMovies />
        <h1 className="text-3xl my-4 font-semibold">Movies For You</h1>
        {/* <RecommendedMovies /> */}
        <LatestMovies />
      </div>
    </div>
  );
};
