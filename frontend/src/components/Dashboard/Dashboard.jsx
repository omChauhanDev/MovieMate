import { EditProfile } from "../Profile/EditProfile";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import { isDarkAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import { isLoggedInAtom } from "@/store/atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const isDark = useAtomValue(isDarkAtom);
  const navigate = useNavigate();
  const isLoggedIn = useAtomValue(isLoggedInAtom);
  useEffect(() => {
    // if (!isLoggedIn) {
    //   navigate("/login");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white"
      } flex-1 flex-col min-h-screen h-full flex relative`}
    >
      <Navbar />
      <div className="flex flex-1">
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
