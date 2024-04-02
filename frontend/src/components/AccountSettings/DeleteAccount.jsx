import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
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
import { useNavigate } from "react-router-dom";
import { userAtom } from "@/store/atoms";
import { useSetAtom } from "jotai";
import { deleteUser } from "@/actions/userActions";
import { toast } from "react-hot-toast";
import { useState } from "react";

export const DeleteAccount = () => {
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const deleteAccountHandler = async () => {
    setLoading(true);
    const response = await deleteUser(setUser);
    if (response.data.success) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      toast(response.data.message, {
        style: {
          fontWeight: "bold",
        },
        icon: "😔",
      });
      navigate("/signup");
    } else {
      toast.error("Something went wrong", {
        style: {
          fontWeight: "bold",
        },
      });
    }
    setLoading(false);
  };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 1, x: -40 },
        visible: { opacity: 1, scale: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4, delay: 0.15 }}
      className="px-5 pt-8 flex flex-col select-none gap-6 font-Poppins transition-colors duration-300"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] scale-150">
        {loading && (
          <div role="status" className="flex flex-col gap-3">
            <p>Please wait</p>
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 mx-auto animate-spin dark:text-gray-600 fill-steelBlue"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
      </div>
      <div>
        <h1 className="mb-4 font-bold text-3xl">Delete Account</h1>
        <p className="max-w-[55ch]">
          Warning: Proceeding with account deletion will result in permanent
          loss of all associated data from our database. Take caution as this
          action cannot be undone.
        </p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="min-w-[50%] flex font-medium items-center justify-center gap-4 mx-auto bg-imperialRed hover:bg-[#bb151d] px-8 rounded-md py-2 whitespace-nowrap text-white">
            Delete my account <FaTrash />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your account and remove all your
              valuable connections with your mates.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-[#ee1b26] hover:bg-[#bb152f]"
              onClick={deleteAccountHandler}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
};
