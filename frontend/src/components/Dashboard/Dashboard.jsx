import { EditProfile } from "../Profile/EditProfile";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Route, Routes } from "react-router-dom";
export const Dashboard = () => {
  return (
    <div className="flex-1 flex relative bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col relative">
        <Navbar />
        <div className="text-black flex-1 flex bottom-0 font-bold text-4xl bg-seaSalt">
          <Routes>
            <Route index path="/home" element={<Home />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
