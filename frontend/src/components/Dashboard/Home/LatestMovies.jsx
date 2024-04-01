import { searchUpcomingMovies } from "@/services/moviesApi";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const LatestMovies = () => {
  const [latestMovies, setLatestMovies] = useState(null);
  const getMovies = async () => {
    const res = await searchUpcomingMovies(1);
    console.log(res);
    const filteredMovies = res.filter(
      (movie) =>
        movie.original_language === "hi" || movie.original_language === "en"
    );
    setLatestMovies(filteredMovies);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="flex custom-scrollbar w-full overflow-x-auto gap-4 justify-evenly">
      {latestMovies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default LatestMovies;
