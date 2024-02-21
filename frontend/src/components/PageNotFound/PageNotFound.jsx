import { isDarkAtom, isLoggedInAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  const isDark = useAtomValue(isDarkAtom);
  const isLoggedIn = useAtomValue(isLoggedInAtom);
  return (
    <div
      className={`flex-1 bg-herobg flex flex-col justify-center items-center ${
        isDark ? "bg-[#030303] text-white" : ""
      }`}
    >
      <div className="w-[90%] md:w-[50%] xl:w-[35%]">
        <h1 className="font-black text-7xl md:text-9xl text-center">404</h1>
        <div
          className={`h-[1px] ${isDark ? "bg-white" : "bg-black"} my-4 w-full`}
        ></div>
        <p className="font-bold text-2xl text-center">
          Sorry, we can&apos;t find the page you are looking for!
        </p>
        <div className="w-full flex justify-center">
          <Link to={`${isLoggedIn ? "/dashboard" : "/"}`}>
            <button className="bg-steelBlue self-center justify-self-center text-white hover:bg-steelBlueDark mx-auto px-6 py-2 rounded-full text-md font-medium mt-6">
              Take me home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
