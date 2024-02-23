import { isDarkAtom, userAtom } from "@/store/atoms";
import { useAtom, useAtomValue } from "jotai";
import { useForm } from "react-hook-form";
import { SelectGenre } from "./SelectGenre";
import { SelectLanguage } from "./SelectLanguage";
import { GenderSelection } from "./GenderSelection";
import { useEffect, useState } from "react";
import { updateUserDetails } from "@/actions/userActions";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const UpdateDetails = () => {
  const [user, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useState(false);
  const isDark = useAtomValue(isDarkAtom);
  const [gender, setGender] = useState("");
  const [languagePreferences, setLanguagePreferences] = useState([]);
  const [favoriteGenres, setfavoriteGenres] = useState([]);
  const { register, handleSubmit } = useForm();

  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  function filterEmptyObjects(data) {
    const filteredData = {};
    for (const key in data) {
      if (data[key] !== null && data[key] !== "") {
        if (typeof data[key] === "object" && !Array.isArray(data[key])) {
          if (!isEmptyObject(data[key])) {
            filteredData[key] = filterEmptyObjects(data[key]);
          }
        } else {
          filteredData[key] = data[key];
        }
      }
    }
    return filteredData;
  }

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setfavoriteGenres(user.favoriteGenres);
      setLanguagePreferences(user.languagePreferences);
    }
  }, [user]);
  const getAge = (DOB) => {
    const birthDate = new Date(DOB);
    const currentDate = new Date();
    const timeDifference = currentDate - birthDate;
    const ageInMilliseconds = new Date(timeDifference);
    const age = Math.abs(ageInMilliseconds.getUTCFullYear() - 1970);

    if (age) {
      return age;
    }
    return null;
  };
  const onSubmit = async (data) => {
    setLoading(true);
    const DOB = data.dateOfBirth;
    if (DOB) data.age = getAge(DOB);
    data.gender = gender;
    data.favoriteGenres = favoriteGenres;
    data.languagePreferences = languagePreferences;
    const filteredData = filterEmptyObjects(data);
    if (isEmptyObject(filteredData.location)) {
      delete filteredData.location;
    }
    const response = await updateUserDetails(filteredData, setUser);
    setLoading(false);
    if (response.success) {
      toast.success(response.message, {
        style: {
          fontWeight: "bold",
        },
      });
    } else {
      toast.error("Something went wrong", {
        style: {
          fontWeight: "bold",
        },
      });
    }
  };
  const inputStyling = `p-2 ${
    isDark ? "text-gray-900" : "text-gray-900"
  } rounded-lg bg-gray-50 border font-normal w-full border-gray-200 focus:outline-none focus:border-blue-500`;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 1, x: -40 },
        visible: { opacity: 1, scale: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4, delay: 0.15 }}
      className={`flex-1 flex justify-center select-none static transition-colors duration-300 pt-6 pb-12 px-8 lg:px-16`}
    >
      <div className="w-full md:w-[60%] 2xl:w-[40%]">
        <h1 className="mb-6 font-bold text-3xl font-Poppins">Edit Profile</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-base font-Poppins w-full flex flex-col gap-4"
        >
          <div className="flex flex-col justify-between">
            <label htmlFor="Name" className="w-fit font-medium">
              Name
            </label>
            <input
              id="Name"
              type="text"
              disabled
              readOnly
              value={user.fullName}
              {...register}
              className={`${inputStyling} cursor-not-allowed`}
            />
          </div>
          <div className="flex flex-col gap-1 justify-between">
            <label htmlFor="Name" className="w-fit font-medium">
              Email
            </label>
            <input
              id="Name"
              type="text"
              disabled
              readOnly
              value={user.email}
              {...register}
              className={`${inputStyling} cursor-not-allowed`}
            />
          </div>
          <div className="flex flex-col gap-1 justify-between">
            <label htmlFor="DOB" className="whitespace-nowrap font-medium">
              Date of Birth
            </label>
            <input
              {...register("dateOfBirth")}
              id="DOB"
              type="date"
              required
              defaultValue={
                user.dateOfBirth ? user.dateOfBirth.split("T")[0] : ""
              }
              className={inputStyling}
            />
          </div>
          <GenderSelection setGender={setGender} gender={gender} />
          <div className="flex gap-4">
            <div className="flex w-full flex-col gap-1 justify-between">
              <label htmlFor="city" className="whitespace-nowrap font-medium">
                City
              </label>
              <input
                {...register("location.city")}
                id="city"
                type="text"
                required
                defaultValue={user.location ? user.location.city : ""}
                className={inputStyling}
              />
            </div>
            <div className="flex w-full flex-col gap-1 justify-between">
              <label htmlFor="state" className="whitespace-nowrap font-medium">
                State
              </label>
              <input
                {...register("location.state")}
                id="state"
                type="text"
                required
                defaultValue={user.location ? user.location.state : ""}
                className={inputStyling}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-1 justify-between">
            <label htmlFor="country" className="whitespace-nowrap font-medium">
              Country
            </label>
            <input
              {...register("location.country")}
              id="country"
              type="text"
              required
              defaultValue={user.location ? user.location.country : ""}
              className={inputStyling}
            />
            <HoverCard>
              <HoverCardTrigger asChild>
                <p className="cursor-pointer ml-auto mt-2 -mb-3 hidden lg:inline text-blue-500 font-medium">
                  Why are we asking for your address?
                </p>
              </HoverCardTrigger>
              <HoverCardContent asChild>
                <p className="text-sm min-w-[50ch]">
                  Your city and state information is required to facilitate
                  matching you with movie companions in your vicinity. We use
                  your location details solely for the purpose of connecting you
                  with potential movie buddies within your area.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex flex-col gap-1 justify-between">
            <label className="font-medium">Interested Genre</label>
            <SelectGenre
              setfavoriteGenres={setfavoriteGenres}
              favoriteGenres={favoriteGenres}
            />
          </div>
          <div className="flex flex-col gap-1 justify-between">
            <label className="font-medium">Prefered Language</label>
            <SelectLanguage
              setLanguagePreferences={setLanguagePreferences}
              languagePreferences={languagePreferences}
            />
          </div>
          {loading && (
            <div role="status" className="ml-auto mr-8">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-steelBlue"
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
          {!loading && (
            <button className="ml-auto mt-2 py-2 px-4 bg-steelBlue w-fit font-medium hover:bg-steelBlueDark text-white rounded-lg active:bg-steelBlueDark">
              Submit
            </button>
          )}
        </form>
      </div>
    </motion.div>
  );
};
