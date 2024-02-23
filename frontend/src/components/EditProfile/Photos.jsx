import { FaCamera } from "react-icons/fa";
import { Post } from "./Post";
export const Photos = () => {
  const photos = [
    {
      id: 1,
      imageLink:
        "https://www.thesun.co.uk/wp-content/uploads/2022/02/NINTCHDBPICT000712084356.jpg",
    },
    {
      id: 2,
      imageLink:
        "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XCBSBSI3XZHYRMALPNPRH54ULM.jpg",
    },
    {
      id: 3,
      imageLink:
        "https://nofilmschool.com/media-library/read-the-batman-screenplay.jpg?id=34049851&width=1245&height=700&quality=90&coordinates=0%2C0%2C0%2C0",
    },
  ];
  return (
    <div className="flex-1 mx-4 lg:mx-10 my-6 font-Poppins">
      <h1 className="my-3 opacity-90 font-bold text-xl">Pictures</h1>
      <div className="md:max-w-[85%] mx-auto my-6 flex flex-col md:flex-row gap-1">
        {photos.map((post) => (
          <Post
            key={post.id}
            imageLink={post.imageLink}
            caption={post.caption}
          />
        ))}
      </div>
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
