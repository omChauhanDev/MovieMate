import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import { isDarkAtom, userAtom } from "@/store/atoms";
import { useAtom, useAtomValue } from "jotai";
import { MdEdit } from "react-icons/md";
import TextareaAutosize from "react-textarea-autosize";
import { imageUpload, updateUserDetails } from "@/actions/userActions";
import { toast } from "react-hot-toast";
export const UpdationModal = () => {
  const [user, setUser] = useAtom(userAtom);
  const { register, handleSubmit } = useForm();
  // const [newHeader, setNewHeader] = useState(user.)
  const isDark = useAtomValue(isDarkAtom);
  console.log(user);
  const uploadImages = async (imageData) => {
    try {
      const responses = await Promise.all(
        Object.entries(imageData).map(async ([tag, file]) => {
          try {
            const response = await imageUpload(tag, file, setUser);
            return response;
          } catch (error) {
            console.error(
              `Error occurred while uploading ${tag} image:`,
              error
            );
            return {
              success: false,
              message: `Error occurred while uploading ${tag} image: ${error.message}`,
            };
          }
        })
      );

      return responses;
    } catch (error) {
      console.error("Error occurred while uploading images:", error);
      return [
        {
          success: false,
          message: `Error occurred while uploading images: ${error.message}`,
        },
      ];
    }
  };

  const onSubmit = async (data) => {
    const imageData = {};
    if (data.header && data.header[0]) {
      imageData.header = data.header[0];
    }
    if (data.profile && data.profile[0]) {
      imageData.profile = data.profile[0];
    }

    if (Object.keys(imageData).length !== 0) {
      const imageResponse = await uploadImages(imageData);
    }
    // console.log(data);
    const bioObject = {};
    if ("bio" in data) {
      bioObject.bio = data.bio ? data.bio : "";
    }

    const bioResponse = await updateUserDetails(bioObject, setUser);
    if (bioResponse.success) {
      toast.success("Profile updated successfully!", {
        style: {
          fontWeight: "bold",
        },
      });
    } else {
      toast.error("There was an error while updating", {
        style: {
          fontWeight: "bold",
        },
      });
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="font-bold border text-sm border-gray-400 hover:bg-gray-500/40 px-4 py-2 rounded-full">
            Edit Profile
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent
          className={`gap-0 font-Poppins border-gray-400/30 ${
            isDark ? "bg-black text-white " : ""
          } `}
        >
          <AlertDialogHeader className="p-0 mb-1 gap-0">
            <AlertDialogTitle className="font-bold text-xl text-left">
              Edit Profile
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="text-sm">
            <p className="opactiy-60">Make changes to your profile.</p>
            <div className="w-full mt-2 mb-4 relative">
              <div className="w-full">
                <img
                  src="https://wallpaperswide.com/download/code_2-wallpaper-2560x2048.jpg"
                  alt="header"
                  className="h-[150px] object-cover w-full relative"
                />
                <div className="h-full w-full cursor-pointer transition-colors hover:text-gray-300 hover:bg-black/60 bg-black/40 text-white absolute flex items-center justify-center top-0 left-0">
                  <MdEdit size={28} />
                  <input
                    type="file"
                    {...register("header")}
                    accept=".png, .jpg, .jpeg .heic"
                    className="w-full cursor-pointer h-full opacity-0 absolute"
                  />
                </div>
              </div>
              <div className="w-[25%] aspect-square h-auto max-w-48 rounded-full left-4 bottom-0 translate-y-1/2 absolute outline outline-white outline-2">
                <img
                  src="https://i.scdn.co/image/ab67616100005174a11b2a6b38822c822f2fdf40"
                  content="center"
                  className="bg-gray-500 rounded-full object-cover aspect-square outline-gray-100 relative"
                />
                <div className="h-full w-full cursor-pointer rounded-full transition-colors hover:text-gray-300 hover:bg-black/60 bg-black/40 text-white absolute flex items-center justify-center top-0 left-0">
                  <MdEdit size={28} />
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    {...register("profile")}
                    className="w-full cursor-pointer h-full opacity-0 rounded-full absolute"
                  />
                </div>
              </div>
            </div>
            <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
              <TextareaAutosize
                type="text"
                maxLength={300}
                placeholder="Bio"
                defaultValue={user.bio}
                {...register("bio")}
                className={` ${
                  isDark ? "bg-gray-800/50 text-white" : "bg-gray-50"
                } w-full resize-none min-h-[2.5rem] h-auto text-wrap mb-6 py-3 px-3 text-black border border-gray-400/60 rounded-lg`}
              />
              <div className="flex items-center gap-2 w-full justify-end">
                <AlertDialogCancel className="text-black m-0 hover:bg-gray-200">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-steelBlue hover:bg-steelBlueDark"
                  type="submit"
                >
                  Continue
                </AlertDialogAction>
              </div>
            </form>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
