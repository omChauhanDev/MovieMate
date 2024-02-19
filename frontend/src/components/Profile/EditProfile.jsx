import { isDarkAtom, userAtom } from "@/store/atoms";
import { useAtom, useAtomValue } from "jotai";
import { useForm } from "react-hook-form";
import { SelectGenre } from "./SelectGenre";
import { SelectLanguage } from "./SelectLanguage";
import { GenderSelection } from "./GenderSelection";
import { useState } from "react";
import { updateUserDetails } from "@/actions/userActions";

export const EditProfile = () => {
  const [user, setUser] = useAtom(userAtom);
  const isDark = useAtomValue(isDarkAtom);
  const [gender, setGender] = useState("");
  const [languagePreferences, setLanguagePreferences] = useState([]);
  const [favouriteGenres, setFavouriteGenres] = useState([]);
  const { register, handleSubmit } = useForm();

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

  const onSubmit = (data) => {
    const DOB = data.dateOfBirth;
    data.age = getAge(DOB);
    data.gender = gender;
    data.favoriteGenres = favouriteGenres;
    data.languagePreferences = languagePreferences;
    console.log(data);
    updateUserDetails(data, setUser);
  };
  const inputStyling = `p-2 ${
    isDark ? "text-gray-900" : "text-gray-900"
  } rounded-lg bg-gray-50 border font-normal w-full border-gray-200 focus:outline-none focus:border-blue-500`;

  return (
    <div
      className={`flex-1 py-12 flex justify-center font-Poppins static transition-colors duration-300 pt-20 px-8 lg:px-16`}
    >
      <div className="w-full md:w-[40%]">
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
              {...register("location")}
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
            <SelectGenre setFavouriteGenre={setFavouriteGenres} />
          </div>
          <div className="flex flex-col gap-1 justify-between">
            <label className="font-medium">Prefered Language</label>
            <SelectLanguage setLanguagePreferences={setLanguagePreferences} />
          </div>
          <button className="ml-auto mt-2 py-2 px-4 bg-steelBlue w-fit font-medium text-white rounded-lg active:bg-steelBlueDark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
