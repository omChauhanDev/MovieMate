import { isDarkAtom } from "@/store/atoms";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import ThemeToggler from "../ui/themeToggler";
export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDark = useAtomValue(isDarkAtom);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen h-full xl:static absolute z-[99] w-fit">
      <button
        className="absolute xl:hidden left-6 top-5 z-[100] font-bold"
        onClick={toggleSidebar}
      >
        <i className="text-2xl">
          {isSidebarOpen ? <MdOutlineClose /> : <MdMenu />}
        </i>
      </button>
      <div
        className={`min-h-screen h-screen w-screen sm:w-[22rem] flex items-center transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${isDark ? "bg-midnightBlack" : "bg-white"} xl:translate-x-0`}
      >
        <div className="flex flex-col w-full h-full justify-end mb-24 items-center">
          <div className="flex w-full flex-col items-center justify-between h-[80%]">
            <div className="flex flex-col w-full">
              <button>sample nav item</button>
              <button>sample nav item</button>
              <button>sample nav item</button>
              <button>sample nav item</button>
            </div>

            <div className="flex flex-col">
              <Link to="/dashboard/edit-profile" className="text-center">
                Edit Profile
              </Link>
              <button>Logout</button>
              {/* <button onClick={themeHandler}>Dark</button> */}
              <ThemeToggler />
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
