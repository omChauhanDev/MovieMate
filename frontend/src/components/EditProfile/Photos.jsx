import { FaCamera } from "react-icons/fa";
import { Post } from "./Post";
export const Photos = () => {
  const photos = [
    {
      id: 1,
      imageLink:
        "https://www.thesun.co.uk/wp-content/uploads/2022/02/NINTCHDBPICT000712084356.jpg",
      caption: "I am vengeance.",
    },
    {
      id: 2,
      imageLink:
        "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XCBSBSI3XZHYRMALPNPRH54ULM.jpg",
      caption: "What does a liar do when he is dead? He lies still.",
    },
  ];
  return (
    <div className="flex-1 mx-10 my-6 font-Poppins">
      <h1 className="my-3 opacity-90 font-bold text-xl">Pictures</h1>
      {/* <div className="w-full mt-6 flex">
        {photos.map((post) => (
          <Post
            key={post.id}
            imageLink={post.imageLink}
            caption={post.caption}
          />
        ))}
      </div> */}
      <div className="max-w-full relative border border-dashed cursor-pointer border-gray-500 flex items-center gap-2 justify-center font-medium py-6">
        <FaCamera className="opacity-90 " />
        <p className="text-md opacity-90">Add a new post</p>
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .heic"
          className="absolute bg-green-400 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};
