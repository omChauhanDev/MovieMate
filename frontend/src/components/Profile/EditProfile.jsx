import { isDarkAtom, userAtom } from "@/store/atoms";
import { useAtom, useAtomValue } from "jotai";
import { useForm } from "react-hook-form";
import { SelectGenre } from "./SelectGenre";
import { SelectLanguage } from "./SelectLanguage";
import { GenderSelection } from "./GenderSelection";
import { useEffect, useState } from "react";
import { updateUserDetails } from "@/actions/userActions";
import { toast } from "react-hot-toast";
export const EditProfile = () => {
  const [user, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useState(false);
  const isDark = useAtomValue(isDarkAtom);
  const [gender, setGender] = useState("");
  const [languagePreferences, setLanguagePreferences] = useState([]);
  const [favoriteGenres, setfavoriteGenres] = useState([]);
  const { register, handleSubmit } = useForm();

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
    console.log("Data", data);
    const filteredData = {};
    for (const key in data) {
      if (data[key] !== null && data[key] !== "") {
        filteredData[key] = data[key];
      }
    }
    console.log("Filtered", filteredData);
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
    <div
      className={`flex-1 py-12 flex justify-center font-Poppins static transition-colors duration-300 pt-20 px-8 lg:px-16`}
    >
      <div className="w-full md:w-[60%] 2xl:w-[40%]">
        <h1 className="mb-6 font-bold text-3xl">Edit Profile</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-base w-full flex flex-col gap-4"
        >
          <div className="flex flex-col justify-between">
            <label htmlFor="Name" className="w-fit font-medium">
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
          <div className="flex flex-col gap-1 justify-between">
            <label htmlFor="Name" className="w-fit font-medium">
              Email
            </label>
            <input
              id="Name"
              type="text"
              disabled
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
              defaultValue={
                user.dateOfBirth ? user.dateOfBirth.split("T")[0] : ""
              }
              className={inputStyling}
            />
          </div>
          <GenderSelection setGender={setGender} gender={gender} />
          <div className="flex flex-col gap-1 justify-between">
            <label htmlFor="DOB" className="whitespace-nowrap font-medium">
              City
            </label>
            <select
              defaultValue={""}
              id="cities"
              // {...register("location")}
              className={inputStyling}
            >
              <option value="" disabled>
                Select a city
              </option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Pune">Pune</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Surat">Surat</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Kanpur">Kanpur</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Patna">Patna</option>
              <option value="Indore">Indore</option>
              <option value="Thane">Thane</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Firozabad">Firozabad</option>
              <option value="Ludhiana">Ludhiana</option>
              <option value="Agra">Agra</option>
              <option value="Nashik">Nashik</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Meerut">Meerut</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Kalyan-Dombivali">Kalyan-Dombivali</option>
              <option value="Vasai-Virar">Vasai-Virar</option>
              <option value="Varanasi">Varanasi</option>
              <option value="Noida">Noida</option>
              <option value="Ghaziabad">Ghaziabad</option>
            </select>
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
            <button className="ml-auto mt-2 py-2 px-4 bg-steelBlue w-fit font-medium text-white rounded-lg active:bg-steelBlueDark">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
