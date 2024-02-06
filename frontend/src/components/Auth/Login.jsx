import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full mx-auto flex items-center justify-center h-full">
        <div className="text-white font-Outfit h-full flex-[4] bg-loginbg bg-cover text-center bg-center"></div>
        <div className="flex-[3] font-Poppins flex flex-col items-center justify-center rounded-l-3xl h-full relative">
          <Link to="/" className="absolute top-6 left-6 font-bold text-xl">
            Movie Mate
          </Link>
          <h1 className="font-bold text-4xl">Create your account</h1>
          <p className="text-md mt-2 font-[300]">
            Enter the details below to get started
          </p>
        </div>
      </div>
    </div>
  );
};
