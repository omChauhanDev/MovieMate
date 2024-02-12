import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen h-full xl:static absolute w-fit">
      <button
        className="absolute xl:hidden left-6 top-5 z-[100] font-bold"
        onClick={toggleSidebar}
      >
        <i className="text-2xl">
          {isSidebarOpen ? <MdOutlineClose /> : <MdMenu />}
        </i>
      </button>
      <div
        className={`min-h-screen h-screen w-screen max-w-[screen] bg-white min-w-[22rem] flex items-center transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
      >
        <div className="flex flex-col w-full h-full items-center">
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-col w-full h-full max-h-[75%]">
              <button>sample nav item</button>
              <button>sample nav item</button>
              <button>sample nav item</button>
              <button>sample nav item</button>
            </div>

            <div className="flex flex-col gap-3">
              <button>Profile</button>
              <button>Logout</button>
              <button>Dark</button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
