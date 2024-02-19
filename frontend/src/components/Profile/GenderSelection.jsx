import { isDarkAtom, userAtom } from "@/store/atoms";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

export const GenderSelection = ({ setGender }) => {
  const [selectedGender, setSelectedGender] = useState(null); // State to manage the selected gender
  const user = useAtomValue(userAtom);
  const isDark = useAtomValue(isDarkAtom);
  const handleGenderSelection = (gender) => {
    setSelectedGender(gender); // Update the selected gender state
    setGender(gender); // Pass the selected gender to the parent component
  };

  useEffect(() => {
    if (user.gender) {
      setGender(user.gender);
      setSelectedGender(user.gender);
    }
  }, [user.gender, setGender]);

  return (
    <div className={`flex transition-colors duration-300 flex-col gap-1`}>
      <p
        className={`font-medium transition-colors duration-300 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Gender
      </p>
      <div className="flex gap-4 w-full">
        <div
          className="flex flex-1 items-center ps-4 border border-gray-200 bg-gray-50 rounded-lg"
          onClick={() => handleGenderSelection("Male")} // Update selected gender to Male
        >
          <input
            id="bordered-radio-1"
            type="radio"
            value="Male"
            name="bordered-radio"
            checked={selectedGender === "Male"} // Check if selected gender is Male
            onChange={() => handleGenderSelection("Male")} // Update selected gender on change
            className="w-4 h-4 text-steelBlue bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="bordered-radio-1"
            className="w-full py-4 ms-2 text-sm text-black font-medium"
          >
            Male
          </label>
        </div>
        <div
          className="flex flex-1 items-center ps-4 border bg-gray-50 border-gray-200 rounded-lg"
          onClick={() => handleGenderSelection("Female")} // Update selected gender to Female
        >
          <input
            id="bordered-radio-2"
            type="radio"
            value="Female"
            name="bordered-radio"
            checked={selectedGender === "Female"} // Check if selected gender is Female
            onChange={() => handleGenderSelection("Female")} // Update selected gender on change
            className="w-4 h-4 text-steelBlue bg-gray-100 border-gray-300 focus"
          />
          <label
            htmlFor="bordered-radio-2"
            className="w-full py-4 ms-2 text-sm text-black font-medium"
          >
            Female
          </label>
        </div>
      </div>
    </div>
  );
};

GenderSelection.propTypes = {
  setGender: PropTypes.func.isRequired,
};
