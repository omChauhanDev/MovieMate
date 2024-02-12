import { Button } from "../ui/button";
export const HomeNavigation = () => {
  return (
    <nav className="w-full h-[64px] font-Outfit flex items-center absolute top-0">
      <div className="mx-auto w-[75%] flex items-center justify-around">
        <h1 className="text-2xl font-[600] cursor-pointer">Movie Mate</h1>
        <div>
          <div className="flex">
            <Button variant="link" className>
              Home
            </Button>
            <Button variant="link" className>
              About
            </Button>
            <Button variant="link" className>
              Contact
            </Button>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="home">Login</Button>
          <Button variant="home">Signup</Button>
        </div>
      </div>
    </nav>
  );
};
