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
    {
      id: 4,
      imageLink:
        "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/06/20/oppenheimer-1.jpg",
    },
    {
      id: 5,
      imageLink:
        "https://www.telegraph.co.uk/content/dam/films/2023/07/19/TELEMMGLPICT000341390453_16897694776250_trans_NvBQzQNjv4Bqc3IxSbjMmXltPISQXxZkAKCFjM66479QldWRZZliqmY.jpeg",
    },
    {
      id: 6,
      imageLink:
        "https://media.wired.com/photos/64bae9eedaed59ebbf460ca6/master/pass/Oppenheimer-and-the-Dharma-of-Death-Culture.jpg",
    },
  ];
  return (
    <div className="flex-1 mx-4 lg:mx-10 my-6 font-Poppins">
      <h1 className="my-3 opacity-90 font-bold text-xl">Pictures</h1>
      <div className="md:max-w-[85%] mx-auto my-6 grid grid-cols-3 md:flex-row gap-1">
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
