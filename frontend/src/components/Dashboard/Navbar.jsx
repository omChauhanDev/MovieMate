import { Link } from "react-router-dom";
import { Button } from "../ui/button";
export const Navbar = () => {
  return (
    <nav className="w-full h-[64px] font-Outfit flex items-center">
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
