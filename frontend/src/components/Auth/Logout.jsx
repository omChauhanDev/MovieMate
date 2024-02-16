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
import { isDarkAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
export const Logout = () => {
  const isDark = useAtomValue(isDarkAtom);
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className={`mx-auto transition-colors rounded-lg py-2 px-4 ${
              isDark ? "hover:bg-red-500/10" : "hover:bg-red-700/20"
            } w-full text-left cursor-pointer`}
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
            <AlertDialogAction className="bg-red-500 hover:bg-red-700">
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
