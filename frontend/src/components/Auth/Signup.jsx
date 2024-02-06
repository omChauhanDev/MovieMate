import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full mx-auto flex items-center justify-center h-full">
        <div className="flex-[3] font-Poppins flex flex-col items-center justify-center rounded-l-3xl h-full">
          <Link to="/" className="absolute top-6 left-6 font-bold text-xl">
            Movie Mate
          </Link>
          <h1 className="font-bold text-4xl">Create your account</h1>
          <p className="text-md mt-2 font-[300]">
            Enter the details below to get started
          </p>
        </div>
        <div className="text-white font-Outfit h-full flex-[4] bg-signupbg bg-cover text-center bg-center">
          <h1 className="max-w-[26ch] mx-auto mt-24 text-4xl font-[800]">
            Join others in the road of finding the perfect cinema companion 🍿🎬
          </h1>
          <p className="mt-4 text-xl font-semibold">
            Now you never have to hit the theatres alone!{" "}
            <span className="block italic font-thin">Signup for free</span>
          </p>
        </div>
      </div>
    </div>
  );
};
