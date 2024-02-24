import { FaCamera } from "react-icons/fa";
import { Post } from "./Post";
import { userAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import { imageUpload } from "@/actions/userActions";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
export const Photos = () => {
  const [user, setUser] = useAtom(userAtom);
  const [userPhotos, setUserPhotos] = useState([]);

  const uploadPostHandler = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    toast("Uploading your image...", {
      icon: "⏳",
      style: {
        fontWeight: "bold",
      },
    });
    const response = await imageUpload("general", file, setUser);
    if (response.data.success) {
      toast.success("Post created successfully!", {
        style: {
          fontWeight: "bold",
        },
      });
    } else {
      toast.error("We couldn't upload your image.", {
        style: {
          fontWeight: "bold",
        },
      });
    }
  };

  useEffect(() => {
    setUserPhotos(
      user.files ? user.files.filter((post) => post.tag === "general") : []
    );
  }, [user]);

  return (
    <div className="flex-1 mx-4 lg:mx-10 my-6 font-Poppins">
      <h1 className="my-3 opacity-90 font-bold text-xl">Pictures</h1>
      <div className="md:max-w-[85%] mx-auto my-6 grid grid-cols-3 md:flex-row gap-1">
        {userPhotos &&
          userPhotos.map((post) => (
            <Post key={post._id} postId={post._id} imageLink={post.url} />
          ))}
      </div>
      <div className="max-w-full relative border border-dashed cursor-pointer border-gray-500 flex items-center gap-2 justify-center font-medium py-6">
        <FaCamera className="opacity-90 " />
        <p className="text-md opacity-90">Add a new post</p>
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .heic"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          onChange={uploadPostHandler}
        />
      </div>
    </div>
  );
};
