import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const Navigation = () => {
  return (
    <div className="h-[64px] w-full sticky z-[200] top-0 font-Outfit">
      <nav className="bg-white z-[100] h-full w-full">
        <div className="w-[90%] lg:w-[70%] h-full mx-auto flex justify-between items-center">
          <h1 className="font-medium text-2xl">Movie Mate</h1>
          <div className="flex">
            <Link to="/login">
              <Button variant="link" className="text-md">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="link" className="text-md">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
