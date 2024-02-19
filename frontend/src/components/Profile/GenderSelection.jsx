import { userAtom } from "@/store/atoms";
import PropTypes from "prop-types";
import { useAtomValue } from "jotai";
export const GenderSelection = ({ setGender }) => {
  const user = useAtomValue(userAtom);
  console.log("user in gender", user);
  return (
    <div className="flex flex-col gap-1">
      <p>Gender</p>
      <div className="flex gap-4 w-full">
        <div
          className="flex  flex-1 items-center ps-4 border border-gray-200/70 rounded-lg"
          onClick={() => setGender("Male")}
        >
          <input
            id="bordered-radio-1"
            type="radio"
            value="Male"
            name="bordered-radio"
            onClick={() => setGender("Male")}
            className="w-4 h-4 text-steelBlue bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="bordered-radio-1"
            className="w-full py-4 ms-2 text-sm font-medium"
          >
            Male
          </label>
        </div>
        <div
          className="flex flex-1 items-center ps-4 border border-gray-200/70 rounded-lg"
          onClick={() => setGender("Female")}
        >
          <input
            id="bordered-radio-2"
            type="radio"
            value="Female"
            name="bordered-radio"
            onClick={() => setGender("Female")}
            className="w-4 h-4 text-steelBlue bg-gray-100 border-gray-300 focus"
          />
          <label
            htmlFor="bordered-radio-2"
            className="w-full py-4 ms-2 text-sm font-medium"
          >
            Female
          </label>
        </div>
      </div>
    </div>
  );
};

GenderSelection.propTypes = {
  setGender: PropTypes.func,
};
