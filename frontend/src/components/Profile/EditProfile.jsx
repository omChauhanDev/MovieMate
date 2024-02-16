import { isDarkAtom, userAtom } from "@/store/atoms";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const EditProfile = () => {
  const user = useAtomValue(userAtom);
  const [value, setValue] = useState(0);
  const isDark = useAtomValue(isDarkAtom);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const inputStyling = `p-2 ${
    isDark ? "text-black" : "text-black"
  } rounded-lg bg-gray-100 border font-normal w-[80%] border-gray-300 focus:outline-none focus:border-blue-500`;

  console.log("User hai: ", user);
  console.log("Dark mode hai: ", isDark);

  return (
    <div className={`flex-1 pl-16 pt-20`}>
      <div className="w-[50%]">
        <h1 className="mb-6 text-4xl">Edit Profile</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-base w-full flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2 justify-between">
            <label htmlFor="Name" className="w-fit">
              Name
            </label>
            <input
              id="Name"
              type="text"
              disabled
              value={user.fullName}
              {...register}
              className={`${inputStyling} cursor-not-allowed`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <label htmlFor="DOB" className="whitespace-nowrap">
              Date of Birth
            </label>
            <input
              {...register}
              id="DOB"
              type="date"
              className={inputStyling}
            />
          </div>
          <button className="py-2 px-3 bg-steelBlue w-fit text-white rounded-lg font-medium">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
