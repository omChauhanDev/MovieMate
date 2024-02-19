import { useAtom } from "jotai";
import { isDarkAtom } from "@/store/atoms";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
const ThemeToggler = () => {
  const [isDark, setIsDark] = useAtom(isDarkAtom);
  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="py-1 transition-colors scale-[0.7]">
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleTheme}
          className="sr-only"
        />
        <span className="label ml-[-4px] flex items-center text-2xl">
          <BsFillSunFill />
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isDark ? "bg-[#212b36]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isDark ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-xl">
          <FaMoon />
        </span>
      </label>
    </div>
  );
};

export default ThemeToggler;
