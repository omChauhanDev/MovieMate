import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { userAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { UpdationModal } from "./UpdationModal";

export const ProfileHeader = () => {
  const user = useAtomValue(userAtom);
  // console.log(user);
  const navigate = useNavigate();

  const [createdAt, setCreatedAt] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState(null);
  const [friendsCount, setFriendsCount] = useState(null);

  useEffect(() => {
    // console.log("Inside useEffect: ", user);
    if (user) {
      const date = new Date(user.createdAt);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthName = months[date.getMonth()];
      const year = date.getFullYear();
      const formattedDate = `${monthName} ${year}`;
      const bio = user.bio;
      const location = user.location
        ? `${user.location.city}, ${user.location.country}`
        : null;
      const friendsCount = user.friends
        ? Object.keys(user.friends).length
        : null;

      setCreatedAt(user.createdAt);
      setFormattedDate(formattedDate);
      setLocation(location);
      setBio(bio);
      setFriendsCount(friendsCount);
    }
  }, [user]);

  return (
    <div className="w-full">
      <div className="w-full py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center ml-6 gap-2 font-bold"
        >
          <FaArrowLeft />
          Back
        </button>
      </div>
      <div className="w-full relative">
        <img
          src="https://wallpaperswide.com/download/code_2-wallpaper-2560x2048.jpg"
          className="h-[30vh] object-center w-full object-cover bg-gray-200"
        ></img>
        <img
          src="https://i.scdn.co/image/ab67616100005174a11b2a6b38822c822f2fdf40"
          content="center"
          className="min-w-[6rem] w-[35%] h-auto bg-gray-500 rounded-full outline outline-2 aspect-square object-cover object-center outline-gray-100 max-w-48  md:w-[20%] -bottom-16 sm:-bottom-20 left-4 sm:left-8 absolute "
        ></img>
      </div>
      <div className="w-full pb-4 border-b-gray-300/60 shadow-sm border-b realtive">
        <div className="w-full flex py-6 px-8 justify-end">
          <UpdationModal />
        </div>
        <div className="mx-4 sm:mx-10 flex justify-between font-Poppins">
          <div className="py-2 sm:py-4">
            <h1 className="font-bold text-2xl">{user.fullName}</h1>
            <p className="my-1 max-w-[80ch] ">{bio}</p>
            <div className="flex flex-wrap gap-5 mt-4 items-center opacity-80">
              <h1 className="flex items-center gap-2">
                <IoCalendarOutline className="size-5" />
                <p>Joined {formattedDate}</p>
              </h1>
              <h1 className="flex items-center gap-2">
                <CiLocationOn className="size-6" />
                <p>{location}</p>
              </h1>
              <h1 className="flex items-center gap-2">
                <LiaUserFriendsSolid className="size-6" />
                <p>{friendsCount} Mates</p>
              </h1>
            </div>
          </div>
          {/* <div className="flex flex-1 justify-end m-8 gap-4 items-center">
            <div className="px-4 py-6 bg-[#dcebf5] rounded-xl flex flex-col items-center">
              <p className="font-bold text-steelBlueDark">12</p>
              <h1 className="font-bold text-md">Completed Meets</h1>
            </div>
            <div className="px-4 py-6 bg-[#f3e1f7] rounded-xl flex flex-col items-center">
              <p className="font-bold text-[#67107d]">Thriller</p>
              <h1 className="font-bold text-md">Favourite Genre</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
