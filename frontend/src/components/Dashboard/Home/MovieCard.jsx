/* eslint-disable react/prop-types */

import { useState } from "react";
import MovieDetails from "./Modals/MovieDetails/MovieDetails";

const MovieCard = ({ movie }) => {
  const [movieModal, setMovieModal] = useState(false);

  return (
    <>
      {movieModal && (
        <MovieDetails
          movie={movie}
          movieModal={movieModal}
          setMovieModal={setMovieModal}
        />
      )}
      <div className="relative peer" onClick={() => setMovieModal(true)}>
        <img
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="min-h-[19rem] min-w-[12rem] mb-2 object-cover rounded-2xl"
        ></img>
        <div className="scale-0 w-full absolute transition-all px-3 duration-200 peer-hover:scale-100 text-md bg-black/40 text-white z-[11] bottom-6 ">
          <p>{movie.title}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
