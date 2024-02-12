import { Button } from "../ui/button";
export const Navbar = () => {
  return (
    <nav className="w-full h-[64px] font-Outfit flex items-center top-0">
      <div className="mx-auto h-full w-[90%] flex items-center justify-end">
        <div>
          <div className="flex">
            <Button variant="link" className>
              Movies
            </Button>
            <Button variant="link" className>
              Friends
            </Button>
            <Button variant="link" className>
              Chat
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
