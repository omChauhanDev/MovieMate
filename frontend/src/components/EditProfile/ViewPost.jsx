import React from "react";

export const ViewPost = ({ togglePopup, imageLink }) => {
  return (
    <div
      onClick={togglePopup}
      className="fixed z-[51] cursor-pointer size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="fixed z-[52] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={imageLink}
          className="max-h-[90vh] max-w-[90vw] aspect-auto object-contain"
          alt="post"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
