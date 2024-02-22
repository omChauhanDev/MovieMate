import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import { isDarkAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import { isLoggedInAtom } from "@/store/atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AccountSettings } from "../Profile/AccountSettings";
export const Dashboard = () => {
  const isDark = useAtomValue(isDarkAtom);
  const navigate = useNavigate();
  const isLoggedIn = useAtomValue(isLoggedInAtom);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white"
      } flex-col flex w-full  min-h-screen h-full relative overflow-hidden `}
    >
      <Navbar />
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="flex flex-col bg-black w-full h-full relative overflow-auto">
          <div className="flex w-full h-full">
            <Routes>
              <Route index element={<Home />} />
              <Route
                path="/dashboard/account-settings"
                element={<AccountSettings />}
              />
              <Route path="/account-settings" element={<AccountSettings />} />
              <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
