import PropTypes from "prop-types";
import { useState } from "react";
import { ViewPost } from "./ViewPost";
export const Post = ({ imageLink, postId }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className={`flex-1 mx-auto cursor-pointer relative`}>
      <div className="relative" onClick={togglePopup}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-20"></div>
        <img
          src={imageLink}
          className="aspect-square object-cover object-top"
          alt="post"
        />
      </div>
      {showPopup && (
        <ViewPost
          togglePopup={togglePopup}
          postId={postId}
          imageLink={imageLink}
        />
      )}
    </div>
  );
};
Post.propTypes = {
  imageLink: PropTypes.string,
  postId: PropTypes.string,
};
