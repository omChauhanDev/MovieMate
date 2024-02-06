import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

import { Link } from "react-router-dom";
export const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("data ->", data);
  };

  const loginHandler = () => {
    //TODO: verify credentials and generate a token in response
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full mx-auto flex items-center justify-center h-full">
        <div className="text-white font-Outfit h-full flex-[4] bg-loginbg bg-cover hidden lg:block text-center bg-center"></div>
        <div className="flex-[3] bg-loginbg lg:bg-none bg-center bg-cover font-Poppins flex flex-col items-center justify-center h-full relative px-8">
          <Link
            to="/"
            className="absolute top-6 left-6 font-bold text-xl text-white lg:text-black"
          >
            Movie Mate
          </Link>
          <h1 className="font-bold text-3xl sm:text-4xl text-white lg:text-black">
            Welcome Back
          </h1>
          <p className="text-md mt-2 font-[300] text-white lg:text-black">
            Enter your credentials and log back in.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full sm:w-[65%] flex-col gap-4 mt-8 font-Poppins"
          >
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
              required
              placeholder="Password"
              className="p-2 rounded-lg border w-full border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            <Link
              to="/forgot-password"
              className="text-left text-blue-400 lg:text-right lg:text-blue-500 font-sans font-[500]"
            >
              Forgot Password?
            </Link>
            <button
              onClick={loginHandler}
              className="bg-steelBlue text-white py-2 px-3 rounded-lg font-[500]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};