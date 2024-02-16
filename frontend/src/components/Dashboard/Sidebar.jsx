import { isDarkAtom } from "@/store/atoms";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import ThemeToggler from "../ui/themeToggler";
import { Button } from "../ui/button";
import { Logout } from "../Auth/Logout";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDark = useAtomValue(isDarkAtom);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const buttonTheme = `px-4 py-2 text-left rounded-lg transition-colors ${
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
        <h1 className="relative top-16 text-3xl font-Outfit font-black">
          Movie <span className="text-steelBlue">Mate</span> 🎥
        </h1>
        <div className="flex flex-col mx-auto h-full w-full justify-end mb-24 items-center">
          <div className="flex w-full flex-col items-center justify-between h-[80%]">
            <div className="flex flex-col gap-3 w-[90%] text-lg">
              <button className={buttonTheme}>Dashboard</button>
              <button className={buttonTheme}>Pending Requests</button>
              <button className={buttonTheme}>Chats</button>
              <button className={buttonTheme}>Upcoming Meets</button>
            </div>

            <div className="flex flex-col items-start text-left w-[80%] text-lg">
              <div className="justify-start items-center flex">
                <ThemeToggler />
              </div>

              <Link to="/dashboard/edit-profile" className={buttonTheme}>
                Edit Profile
              </Link>
              <Logout />
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
