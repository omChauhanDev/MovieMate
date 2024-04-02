import { Home } from "./Home/Home";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import { isDarkAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import { isLoggedInAtom } from "@/store/atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AccountSettings } from "../AccountSettings/AccountSettings";
import { EditProfile } from "../EditProfile/EditProfile";
import MateRequests from "./Mate Requests/MateRequests";
import UpcomingMeets from "./Upcoming Meets/UpcomingMeets";
import Chat from "./Chat/Chat";
export const Dashboard = () => {
  const isDark = useAtomValue(isDarkAtom);
  const navigate = useNavigate();
  const isLoggedIn = useAtomValue(isLoggedInAtom);

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white"
      } flex-col flex w-full h-screen font-Outfit overflow-hidden relative`}
    >
      <Navbar />
      <div className="flex w-full h-full overflow-hidden">
        <Sidebar />
        <div className="flex flex-col w-full h-full relative">
          <div className="flex w-full h-full overflow-auto">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/account-settings" element={<AccountSettings />} />
              <Route path="/mate-requests" element={<MateRequests />} />
              <Route path="/upcoming-meets" element={<UpcomingMeets />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
