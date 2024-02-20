import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useAtom, useAtomValue } from "jotai";
import { isLoggedInAtom, resetLoginAtom, userAtom } from "@/store/atoms";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/utils/HandleAuth";
import { getUserDetails } from "@/actions/userActions";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);
  const isLoggedIn = useAtomValue(isLoggedInAtom);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [, resetLogin] = useAtom(resetLoginAtom);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let response = await loginHandler(data);
      if (response.success) {
        //TODO: set is logged in to true
        resetLogin();
        getUserDetails(setUser);
        toast.success("Logged in successfully!", {
          icon: "🍿",
          style: {
            fontWeight: "bold",
          },
        });
        await setLoading(false);
        navigate("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error occurred during login:", error);
    }
  };

  const loginHandler = async (data) => {
    return await login(data.email, data.password, setUser, setErrorMessage);
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
            {loading && (
              <div role="status" className="mx-auto">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-steelBlue"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}

            <motion.button
              variants={animationVariants}
              initial="initial"
              type="submit"
              disabled={loading}
              animate="animate"
              viewport={{ once: true }}
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
