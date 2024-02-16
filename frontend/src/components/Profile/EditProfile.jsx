import { isDarkAtom, userAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import { useForm } from "react-hook-form";
export const EditProfile = () => {
  const user = useAtomValue(userAtom);
  const isDark = useAtomValue(isDarkAtom);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const inputStyling = `p-2 ${
    isDark ? "text-black" : "text-black"
  } rounded-lg bg-gray-100 border font-normal w-[80%] border-gray-300 focus:outline-none focus:border-blue-500`;

  return (
    <div className={`flex-1 flex justify-center items-center`}>
      <div className="w-[50%]">
        <h1 className="mb-6 text-4xl">Edit Profile</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-base w-full flex flex-col gap-4"
        >
          <div className="flex gap-8 items-center justify-between">
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
          <div className="flex gap-8 items-center justify-between">
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
