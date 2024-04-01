import { useState } from "react";
import FindMatesModal from "./FindMatesModal";

const MovieDetailsContent = ({ movie, setFindMatesModal }) => {
  return (
    <div className="flex py-8 gap-8 container">
      <div className="rounded-lg flex-[2]">
        <img
          className="rounded-lg"
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
        />
      </div>
      <div className="flex-[3] flex flex-col justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <h4 className="text-zinc-400">{movie.release_date}</h4>
          <p className="text-zinc-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            perspiciatis qui iure quod illo maxime impedit sequi nostrum soluta
            pariatur facere saepe repellat hic quaerat rem accusamus aliquam,
            officiis inventore assumenda eveniet deserunt. Pariatur odio nam
            inventore odit cumque perferendis consequatur. Facere assumenda,
            nemo voluptates repellendus non adipisci eligendi! Commodi
            doloremque animi suscipit a? Nisi sed, porro, minima vel
            voluptatibus odit, dolores expedita minus aliquid vero aperiam quia
            quibusdam blanditiis quaerat in enim. Excepturi similique aut
            debitis ut, illum perferendis dolores veniam. In amet quia
            voluptatum dicta adipisci provident, laborum fuga nulla voluptas
            pariatur dolor asperiores? Optio, dolor! Dolores, sit.
          </p>
        </div>
        {/* <p className="text-sm text-zinc-500">{movie.overview}</p> */}

        <button
          onClick={() => setFindMatesModal(true)}
          className="px-8 py-2 w-fit mx-auto bg-steelBlue rounded-lg text-white"
        >
          Find Mates
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsContent;
