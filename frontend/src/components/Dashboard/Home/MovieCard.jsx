/* eslint-disable react/prop-types */

const MovieCard = ({ movie }) => {
  return (
    <img
      src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
      className="h-[19rem] w-[12rem] mb-2 object-cover rounded-2xl"
    ></img>
  );
};

export default MovieCard;
