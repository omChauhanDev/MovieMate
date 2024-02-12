import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Dashboard = () => {
  return (
    <div className="flex-1 flex relative bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="text-black flex-1 bottom-0 font-bold py-4 pl-4 text-4xl bg-seaSalt">
          Hello World
        </div>
      </div>
    </div>
  );
};
