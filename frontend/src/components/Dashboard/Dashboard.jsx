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
        isDark ? "bg-midnightBlack text-white" : "bg-white"
      } flex-1 flex relative`}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col relative">
        <Navbar />
        <div className="text-black flex-1 flex bottom-0 font-bold text-4xl">
          <Routes>
            <Route index path="/home" element={<Home />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
