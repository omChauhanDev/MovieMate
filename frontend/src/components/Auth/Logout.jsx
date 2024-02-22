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
import { useNavigate } from "react-router-dom";
export const Logout = () => {
  const navigate = useNavigate();
  const [, resetLogin] = useAtom(resetLoginAtom);
  const logoutHandler = () => {
    resetLogin();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
            className={`px-2 flex w-full items-center gap-3 text-sm font-medium py-1.5 hover:text-red-500 text-left rounded-lg transition-colors`}
          >
            Logout
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
