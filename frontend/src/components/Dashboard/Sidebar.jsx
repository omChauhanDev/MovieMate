import { isDarkAtom } from "@/store/atoms";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import ThemeToggler from "../ui/ThemeToggler";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDark = useAtomValue(isDarkAtom);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const buttonTheme = `px-4 flex w-full items-center justify-start gap-3 py-2 text-left rounded-lg transition-colors ${
    isDark
      ? "hover:bg-gray-300/10 rounded-lg transition-colors"
      : "hover:bg-gray-300/20"
  }`;

  return (
    <div className="text-lg font-medium">
      <button
        className="absolute xl:hidden top-5 left-5 z-[5] font-bold"
        onClick={toggleSidebar}
      >
        <i className="text-2xl">
          {isSidebarOpen ? <MdOutlineClose /> : <MdMenu />}
        </i>
      </button>
      <div
        className={`min-h-[calc(101vh-64px)] bottom-0 md:w-[22rem] w-[101vw] pt-16 xl:pt-8 absolute xl:static z-[49] justify-between flex flex-col items-center transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isDark
            ? "bg-midnightBlack border-white/30"
            : "bg-white border-black/20"
        } border-r xl:translate-x-0`}
      >
        <div className="w-[95%] flex flex-col gap-6 justify-center">
          <Link
            to={"/dashboard"}
            className="text-3xl mx-auto font-Outfit font-black"
            onClick={closeSidebar}
          >
            Movie <span className="text-steelBlue">Mate</span> 🎥
          </Link>
          <div className="flex items-start flex-col gap-2 w-[90%] text-lg">
            <Link
              to="/dashboard/"
              className={buttonTheme}
              onClick={closeSidebar}
            >
              <FaHome /> Dashboard
            </Link>
            <button className={buttonTheme} onClick={closeSidebar}>
              <FaUserFriends /> Pending Requests
            </button>
            <button className={buttonTheme} onClick={closeSidebar}>
              <IoChatboxEllipses /> Chats
            </button>
            <button className={buttonTheme} onClick={closeSidebar}>
              <BiSolidMoviePlay /> Upcoming Meets
            </button>
          </div>
        </div>

        <div className="flex flex-col mx-auto h-fit w-[95%] mb-4 items-center">
          <Link
            to="/dashboard/edit-profile"
            className={buttonTheme}
            onClick={closeSidebar}
          >
            <FaUser /> Your Profile
          </Link>
          <div className="w-full flex items-start justify-start">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
};
