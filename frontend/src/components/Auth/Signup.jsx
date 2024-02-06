import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpMatched, setOtpMatched] = useState(false);
  //TODO: Ask backend to send OTP on Email
  const otpHandler = () => {
    //if backend was able to send the otp successfully :
    setOtpSent(true);
    toast.success("OTP sent on email!", {
      style: {
        fontWeight: "bold",
      },
    });
  };

  const otpVerificationHandler = (e) => {
    if (otp && otp == e.target.value) {
      setOtpMatched(true);
    }
  };

  const signupHandler = () => {
    //TODO: if the otp matches, make an entry of the new user in the database and redirect (useNavigate) to login page.
  };

  const onSubmit = (data) => {
    console.log("data ->", data);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full mx-auto flex items-center justify-center relative h-full">
        <div className="flex-[3] bg-signupbg lg:bg-none bg-cover bg-center  font-Poppins flex flex-col items-center justify-center h-full">
          <Link to="/" className="absolute top-6 text-white lg:text-black left-6 font-bold text-xl">
            Movie Mate
          </Link>
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl  text-white lg:text-black">
            Create your account
          </h1>
          <p className="text-md mt-2 text-white lg:text-black font-[300]">
            Enter the details below to get started
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[70%] flex flex-col gap-4 mt-8 font-Poppins"
          >
            <div className="flex sm:flex-row flex-col gap-3">
              <input
                {...register("firstname")}
                type="text"
                required
                placeholder="First Name"
                className="p-2 w-full rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                {...register("lastname")}
                type="text"
                required
                placeholder="Last Name"
                className="p-2 w-full rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              {...register("email")}
              type="email"
              required
              placeholder="Email Address"
              className="p-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            {confirmPassword && password !== confirmPassword && (
              <p className="text-red-500 font-[500]">Passwords do not match!</p>
            )}

            {otpSent && (
              <input
                type="number"
                onChange={otpVerificationHandler}
                placeholder="Enter OTP"
                className="p-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />
            )}

            {!otpSent && (
              <motion.button
                whileTap={{ scale: 0.99, rotate: "0.1deg" }}
                whileHover={{ scale: 1.01 }}
                onClick={otpHandler}
                type="submit"
                className={`${
                  confirmPassword && password === confirmPassword
                    ? "bg-steelBlue active:bg-royalBlue"
                    : "bg-gray-600 cursor-not-allowed"
                } py-2 text-white px-4 font-[500] lg:outline rounded-md`}
                disabled={password !== confirmPassword}
              >
                Register
              </motion.button>
            )}
            {otpSent && (
              <motion.button
                whileTap={{ scale: 0.99, rotate: "0.1deg" }}
                whileHover={{ scale: 1.01 }}
                onClick={signupHandler}
                className={`${
                  otpMatched
                    ? "bg-steelBlue active:bg-royalBlue"
                    : "bg-gray-600 cursor-not-allowed"
                } py-2 text-white px-4 font-[500] outline rounded-md`}
                disabled={password !== confirmPassword}
              >
                Submit OTP
              </motion.button>
            )}
          </form>
        </div>
        <div className="text-white lg:block hidden font-Outfit h-full flex-[4] bg-signupbg bg-cover text-center bg-center">
          <div className="px-6">
            <h1 className="max-w-[26ch] mx-auto mt-24 text-4xl font-[800]">
              Join others in the road of finding the perfect cinema companion
              🍿🎬
            </h1>
            <p className="mt-4 text-xl font-semibold">
              Now you never have to hit the theatres alone!{" "}
              <span className="block italic font-thin">Signup for free</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
