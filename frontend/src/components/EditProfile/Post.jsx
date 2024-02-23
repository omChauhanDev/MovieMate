import PropTypes from "prop-types";
import { useState } from "react";
import { ViewPost } from "./ViewPost";
export const Post = ({ imageLink, caption }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className={`w-[300px] h-[300px] mx-auto cursor-pointer relative`}>
      <div className="relative" onClick={togglePopup}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-20"></div>
        <img
          src={imageLink}
          className="aspect-square object-cover object-top"
          alt="post"
        />
      </div>
      {showPopup && (
        <ViewPost togglePopup={togglePopup} imageLink={imageLink} />
      )}
    </div>
  );
};
Post.propTypes = {
  imageLink: PropTypes.string,
  caption: PropTypes.string,
};
