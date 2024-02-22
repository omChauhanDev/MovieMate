import { Link } from "react-router-dom";
import { isDarkAtom, userAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import { FaBell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logout } from "../Auth/Logout";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const isDark = useAtomValue(isDarkAtom);
  const user = useAtomValue(userAtom);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const clipboardHandler = () => {
    const text =
      "I wanted to share a discovery with you. Movie Mate, an excellent app for finding movie buddies. It's free and quite enjoyable! Here is the link to their website : https://moviemate-web.vercel.app/ ";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("An invite message has been copied to your clipboard", {
          style: {
            fontWeight: 500,
          },
        });
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };
  return (
    <nav
      className={`w-full h-[64px] z-[5] border-b font-Outfit xl:flex ${
        isDark ? "bg-black border-white/30" : "bg-white border-black/20"
      } items-center`}
    >
      <div className="mx-auto h-full w-[95%] flex items-center justify-end">
        <div>
          <div className="flex items-center justify-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative">
                  <span className="absolute -right-1 -top-2 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <FaBell className="cursor-pointer size-5" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="px-8">
                <DropdownMenuLabel>Your Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-[0rem]">
                <DropdownMenuLabel className="cursor-pointer px-8">
                  {user.fullName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="font-medium cursor-pointer"
                  asChild
                >
                  <Link to="/dashboard/account-settings">Account Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <button
                    className="font-medium w-full cursor-pointer"
                    onClick={clipboardHandler}
                  >
                    Invite Friends
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Logout />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
