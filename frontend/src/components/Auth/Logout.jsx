import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "react-hot-toast";
import { isDarkAtom, resetLoginAtom } from "@/store/atoms";
import { useAtom, useAtomValue } from "jotai";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
  const navigate = useNavigate();
  const [, resetLogin] = useAtom(resetLoginAtom);
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    resetLogin();
    toast.success("Logged out successfully!", {
      icon: "🎬",
      style: {
        fontWeight: "bold",
      },
    });

    navigate("/login");
  };
  const isDark = useAtomValue(isDarkAtom);
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className={`px-4 flex w-full items-center gap-3 py-2 text-left rounded-lg transition-colors ${
              isDark
                ? "hover:bg-red-300/20 rounded-lg transition-colors"
                : "hover:bg-red-500/20"
            }`}
          >
            <IoLogOut /> Logout
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent
          className={`${
            isDark ? "bg-midnightBlack text-white border-gray-600" : ""
          }`}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription
              className={`{ ${isDark ? "text-white/90" : ""} `}
            >
              You are about to be logged out of your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className={`${
                isDark ? "bg-gray-900 text-white border-gray-400" : ""
              }`}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-700" asChild>
              <button onClick={logoutHandler}>Logout</button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
