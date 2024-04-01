import { useEffect, useState } from "react";
import MovieDetailsContent from "./MovieDetailsContent";
import FindMatesModal from "./FindMatesModal";

const MovieDetails = ({ movie, movieModal, setMovieModal }) => {
  const [findMatesModal, setFindMatesModal] = useState(false);
  useEffect(() => {
    console.log(movieModal);
  }, [movieModal]);

  return (
    <>
      {findMatesModal && (
        <FindMatesModal setFindMatesModal={setFindMatesModal} movie={movie} />
      )}
      <div
        onClick={() => {
          setMovieModal(false);
        }}
        className="w-full h-full top-0 bg-black/40 left-0 fixed z-[20] modalOpen"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="left-1/2 top-1/2 absolute -translate-y-1/2 -translate-x-1/2 max-w-6xl h-fit w-full rounded-lg py-2 px-4 bg-white -translate-1/2 z-[21] modalOpen"
        >
          <MovieDetailsContent
            movie={movie}
            setFindMatesModal={setFindMatesModal}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
