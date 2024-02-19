import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { isDarkAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";

export const Navbar = () => {
  const isDark = useAtomValue(isDarkAtom);
  return (
    <nav
      className={`w-full h-[64px] hidden z-[5] border-b font-Outfit xl:flex ${
        isDark ? "bg-black border-white/30" : "bg-white border-black/20"
      } items-center`}
    >
      <div className="mx-auto h-full w-[90%] flex items-center justify-end">
        <div>
          <div className="flex gap-5">
            <Link
              to="/dashboard/home"
              variant="link"
              className="flex items-center justify-center"
            >
              Home
            </Link>
            <Link
              to="/dashboard/home"
              variant="link"
              className="flex items-center justify-center"
            >
              Friends
            </Link>
            <Link
              to="/dashboard/home"
              variant="link"
              className="flex items-center justify-center"
            >
              Chat
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
