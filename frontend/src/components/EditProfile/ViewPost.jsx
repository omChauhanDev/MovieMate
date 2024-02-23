import React from "react";

export const ViewPost = ({ togglePopup, imageLink }) => {
  return (
    <div
      onClick={togglePopup}
      className="fixed z-[51] transition-all duration-300 cursor-auto h-full w-full bg-red-900/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="absolute z-[52] h-fit bg-black w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={imageLink}
          className="size-full aspect-auto object-contain"
          alt="post"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
