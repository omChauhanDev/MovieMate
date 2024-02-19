import { EditProfile } from "../Profile/EditProfile";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import { isDarkAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";

export const Dashboard = () => {
  const isDark = useAtomValue(isDarkAtom);
  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white"
      } flex-1 flex-col h-full flex relative`}
    >
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col relative">
          <div className="flex-1 flex">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/edit-profile" element={<EditProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
