import { isDarkAtom } from "@/store/atoms";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import ThemeToggler from "../ui/themeToggler";
import { Logout } from "../Auth/Logout";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";
export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDark = useAtomValue(isDarkAtom);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const buttonTheme = `px-4 flex w-full items-center justify-start gap-3 py-2 text-left rounded-lg transition-colors ${
    isDark
      ? "hover:bg-gray-300/10 rounded-lg transition-colors"
      : "hover:bg-gray-300/20"
  }`;

  return (
    <div className="xl:h-[calc(100vh-64px)] h-screen shadow-sm xl:static absolute z-[99] w-fit font-sans">
      <button
        className="absolute xl:hidden top-6 left-6 z-[110] font-bold"
        onClick={toggleSidebar}
      >
        <i className="text-2xl">
          {isSidebarOpen ? <MdOutlineClose /> : <MdMenu />}
        </i>
      </button>
      <div
        className={`h-full flex-1 w-screen sm:w-[22rem] flex flex-col items-center transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isDark
            ? "bg-midnightBlack border-white/30"
            : "bg-white border-black/20"
        } border-r xl:translate-x-0`}
      >
        <Link
          to={"/"}
          className="relative top-10 text-3xl font-Outfit font-black"
        >
          Movie <span className="text-steelBlue">Mate</span> 🎥
        </Link>
        <div className="flex flex-col mx-auto h-full w-full justify-end mb-4 items-center font-medium">
          <div className="flex w-full flex-col items-center justify-between h-[80%]">
            <div className="flex items-start flex-col gap-2 w-[90%] text-lg">
              <button className={buttonTheme} onClick={toggleSidebar}>
                <FaHome /> Dashboard
              </button>
              <button className={buttonTheme} onClick={toggleSidebar}>
                <FaUserFriends /> Pending Requests
              </button>
              <button className={buttonTheme} onClick={toggleSidebar}>
                <IoChatboxEllipses /> Chats
              </button>
              <button className={buttonTheme} onClick={toggleSidebar}>
                <BiSolidMoviePlay /> Upcoming Meets
              </button>
            </div>

            <div className="flex items-start flex-col w-[90%] text-lg">
              <Link
                to="/dashboard/edit-profile"
                className={buttonTheme}
                onClick={toggleSidebar}
              >
                <FaGear /> Edit Profile
              </Link>
              <div className=" w-full flex items-start justify-start">
                <ThemeToggler />
              </div>
              <div className="w-full" onClick={toggleSidebar}>
                <Logout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
