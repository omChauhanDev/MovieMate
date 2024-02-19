import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useAtom } from "jotai";
import { userAtom } from "@/store/atoms";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/utils/HandleAuth";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      let response = await loginHandler(data);
      console.log("Response aaya", response);
      if (response.success) {
        toast.success("Logged in successfully!", {
          icon: "🍿",
          style: {
            fontWeight: "bold",
          },
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  console.log(user);

  const loginHandler = (data) => {
    return login(data.email, data.password, setUser, setErrorMessage);
  };

  const animationVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
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
          <motion.h1
            variants={animationVariants}
            initial="initial"
            animate="animate"
            transition={(animationVariants.transition, { delay: 0.3 })}
            className="font-bold text-3xl sm:text-4xl text-white lg:text-black"
          >
            Welcome Back
          </motion.h1>
          <motion.p
            variants={animationVariants}
            initial="initial"
            animate="animate"
            transition={(animationVariants.transition, { delay: 0.5 })}
            className="text-md mt-2 font-[300] text-white lg:text-black"
          >
            Enter your credentials and log back in.
          </motion.p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full sm:w-[65%] flex-col gap-4 mt-8 font-Poppins"
          >
            <motion.input
              {...register("email")}
              type="email"
              required
              variants={animationVariants}
              initial="initial"
              animate="animate"
              transition={(animationVariants.transition, { delay: 0.7 })}
              placeholder="Email Address"
              className="p-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            <motion.input
              {...register("password")}
              type="password"
              required
              variants={animationVariants}
              initial="initial"
              animate="animate"
              transition={(animationVariants.transition, { delay: 0.8 })}
              placeholder="Password"
              className="p-2 rounded-lg border w-full border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            <p className="text-red-500 font-[500]">{errorMessage}</p>
            <motion.div
              variants={animationVariants}
              initial="initial"
              animate="animate"
              transition={(animationVariants.transition, { delay: 0.9 })}
              className="ml-auto"
            >
              <Link
                to="/forgot-password"
                className="text-left text-blue-400 lg:text-right lg:text-blue-500 font-sans font-[500]"
              >
                Forgot Password?
              </Link>
            </motion.div>
            <motion.button
              variants={animationVariants}
              initial="initial"
              type="submit"
              animate="animate"
              transition={(animationVariants.transition, { delay: 1.1 })}
              className="bg-steelBlue hover:scale-[1.01] active:scale-[0.99] active:bg-steelBlueDark transition-all outline-none lg:outline text-white py-2 px-3 rounded-lg font-[500]"
            >
              Login
            </motion.button>
          </form>
          <motion.div
            variants={animationVariants}
            initial="initial"
            animate="animate"
            transition={(animationVariants.transition, { delay: 1.3 })}
            className="relative w-full sm:w-[65%] flex py-5 items-center"
          >
            <div className="flex-grow border-t border-white lg:border-gray-400"></div>
            <span className="flex-shrink mx-2 text-white lg:text-gray-400">
              Don&apos;t have an account?
            </span>
            <div className="flex-grow border-t border-white lg:border-gray-400"></div>
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="initial"
            animate="animate"
            transition={(animationVariants.transition, { delay: 1.5 })}
            className="flex w-full justify-center"
          >
            <Link
              to="/signup"
              className="w-full sm:w-[65%] text-white lg:text-black border-2 lg:border text-center font-[500] hover:scale-[1.01] active:scale-[0.99] transition-all border-steelBlueDark hover:bg-steelBlueDark hover:text-white py-2 rounded-lg "
            >
              Signup
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
