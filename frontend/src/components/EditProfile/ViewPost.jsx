import { imageDelete } from "@/actions/userActions";
import { userAtom } from "@/store/atoms";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa6";
import { useSetAtom } from "jotai";
import { toast } from "react-hot-toast";
export const ViewPost = ({ togglePopup, imageLink, postId }) => {
  const setUser = useSetAtom(userAtom);
  const deleteImageHandler = async () => {
    toast("Deleting your post...", {
      icon: "⏳",
      style: {
        fontWeight: "bold",
      },
    });
    const response = await imageDelete(postId, imageLink, setUser);

    if (response.data.success) {
      toast.success("Post deleted successfully!", {
        style: {
          fontWeight: "bold",
        },
      });
    } else {
      toast.error("We couldn't delete your post", {
        style: {
          fontWeight: "bold",
        },
      });
    }
  };
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
        <i
          onClick={deleteImageHandler}
          className="absolute text-white top-4 size-8 right-4 bg-white/20 hover:bg-white/50 rounded-lg transition-colors flex items-center justify-center hover:text-red-600"
        >
          <FaTrash />
        </i>
      </div>
    </div>
  );
};

ViewPost.propTypes = {
  togglePopup: PropTypes.func,
  imageLink: PropTypes.string,
  postId: PropTypes.string,
};
