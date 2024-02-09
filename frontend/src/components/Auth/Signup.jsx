import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { sendOtp, signup } from "@/utils/HandleAuth";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpMatched, setOtpMatched] = useState(false);
  const [loading, setLoading] = useState(false);
  const passwordRegex = /^\S{6,}$/;

  function generateOTP() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join(
      ""
    );
  }

  const onSubmit = async (data) => {
    //first we validate the data
    const password = data.password;
    if (passwordRegex.test(password)) {
      console.log("Password is valid.");
    } else {
      console.log("Password is invalid.");
      setErrorMessage("Your password must contain atleast 6 characters");
      return;
    }
    //then we set it in our state variable.
    setFormData(data);

    const name = `${data.firstname} ${data.lastname}`;
    const email = data.email;
    const otp = generateOTP();
    setLoading(true);
    const response = await sendOtp(email, name, otp);
    setLoading(false);

    if (response.data.success) {
      console.log("OTP IS: ", otp);
      setOtp(otp);
      setOtpSent(true);
      toast.success("OTP sent on email!", {
        style: {
          fontWeight: "bold",
        },
      });
    } else {
      console.log(response.data);
      setErrorMessage(response.data.message);
    }
  };

  const animationVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  };

  const otpVerificationHandler = (e) => {
    if (otp && otp == e.target.value) {
      setOtpMatched(true);
    }
  };

  const signupHandler = async () => {
    if (otpMatched) {
      console.log(formData);
      const fullName = `${formData.firstname} ${formData.lastname}`;
      const email = formData.email;
      const password = formData.password;

      const response = await signup(fullName, email, password);
      if (response.success) {
        toast.success(response.message);
        navigate("/");
      } else {
        toast.error("Your account couldn't be created");
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full mx-auto flex items-center justify-center relative h-full">
        <motion.div className="flex-[3] bg-signupbg lg:bg-none bg-cover bg-center  font-Poppins flex flex-col items-center justify-center h-full">
          <Link
            to="/"
            className="absolute top-6 text-white lg:text-black left-6 font-bold text-xl"
          >
            Movie Mate
          </Link>
          <motion.h1
            variants={animationVariants}
            initial="initial"
            animate="animate"
            transition={(animationVariants.transition, { delay: 0.2 })}
            className="font-bold text-2xl sm:text-3xl lg:text-4xl  text-white lg:text-black"
          >
            Create your account
          </motion.h1>
          <motion.p
            variants={animationVariants}
            initial="initial"
            animate="animate"
            transition={(animationVariants.transition, { delay: 0.4 })}
            className="text-md mt-2 text-white lg:text-black font-[300]"
          >
            Enter the details below to get started
          </motion.p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[70%] flex flex-col gap-4 mt-8 font-Poppins"
          >
            <div className="flex sm:flex-row flex-col gap-4">
              <motion.input
                {...register("firstname")}
                type="text"
                required
                variants={animationVariants}
                initial="initial"
                animate="animate"
                transition={(animationVariants.transition, { delay: 0.6 })}
                disabled={otpSent}
                placeholder="First Name"
                className="p-2 w-full rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <motion.input
                {...register("lastname")}
                type="text"
                required
                variants={animationVariants}
                initial="initial"
                animate="animate"
                transition={(animationVariants.transition, { delay: 0.8 })}
                disabled={otpSent}
                placeholder="Last Name"
                className="p-2 w-full rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <motion.input
              {...register("email")}
              type="email"
              required
              variants={animationVariants}
              initial="initial"
              animate="animate"
              transition={(animationVariants.transition, { delay: 1 })}
              disabled={otpSent}
              placeholder="Email Address"
              className="p-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            <motion.input
              {...register("password")}
              type="password"
              placeholder="Password"
              required
              variants={animationVariants}
              initial="initial"
              animate="animate"
              transition={(animationVariants.transition, { delay: 1.2 })}
              disabled={otpSent}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMessage("");
              }}
              className="p-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            <motion.input
              type="password"
              placeholder="Confirm Password"
              required
              variants={animationVariants}
              initial="initial"
              animate="animate"
              transition={(animationVariants.transition, { delay: 1.4 })}
              disabled={otpSent}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrorMessage("");
              }}
              className="p-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            {confirmPassword && password !== confirmPassword && (
              <p className="text-red-500 font-[500]">Passwords do not match!</p>
            )}

            {errorMessage && (
              <p className="text-red-500 font-[500]">{errorMessage}</p>
            )}

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

            {otpSent && (
              <div className="w-full flex gap-3">
                <input
                  type="number"
                  onChange={otpVerificationHandler}
                  placeholder="Enter OTP"
                  className="p-2 w-full rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
                />
                {/* <motion.button
                  whileTap={{ scale: 0.99, rotate: "0.1deg" }}
                  whileHover={{ scale: 1.01 }}
                  className="w-fit px-4 text-sm bg-royalBlue rounded-lg text-white py-1 whitespace-nowrap"
                  // onClick={otpHandler}
                  type="button"
                >
                  Resend OTP
                </motion.button> */}
              </div>
            )}

            {!otpSent && (
              <motion.button
                whileTap={{ scale: 0.99, rotate: "0.1deg" }}
                whileHover={{ scale: 1.01 }}
                variants={animationVariants}
                initial="initial"
                animate="animate"
                transition={(animationVariants.transition, { delay: 1.6 })}
                // onClick={otpHandler}
                type="submit"
                className={`${
                  confirmPassword && password === confirmPassword
                    ? "bg-steelBlue active:bg-royalBlue"
                    : "bg-gray-600 cursor-not-allowed"
                } py-2 text-white px-4 font-[500] rounded-md`}
                disabled={password !== confirmPassword}
              >
                Register
              </motion.button>
            )}
            {otpSent && (
              <motion.button
                whileTap={{ scale: 0.99, rotate: "0.1deg" }}
                whileHover={{ scale: 1.01 }}
                className={`${
                  otpMatched
                    ? "bg-steelBlue active:bg-royalBlue"
                    : "bg-gray-600 cursor-not-allowed"
                } py-2 text-white px-4 font-[500] outline-none rounded-md`}
                disabled={!otpMatched}
                type="button"
                onClick={signupHandler}
              >
                Submit OTP
              </motion.button>
            )}
          </form>
          <motion.div
            variants={animationVariants}
            initial="initial"
            animate="animate"
            transition={(animationVariants.transition, { delay: 1.8 })}
            className="relative w-[70%] flex py-5 items-center"
          >
            <div className="flex-grow border-t border-white lg:border-gray-400"></div>
            <span className="flex-shrink mx-2 text-white text-center lg:text-gray-400">
              Already have an account?
            </span>
            <div className="flex-grow border-t border-white lg:border-gray-400"></div>
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="initial"
            animate="animate"
            transition={(animationVariants.transition, { delay: 2 })}
            className="w-full flex"
          >
            <Link
              to="/login"
              className="w-[70%] mx-auto border-2 lg:border text-white lg:text-black text-center font-[500] hover:scale-[1.01] active:scale-[0.99] transition-all border-royalBlue hover:bg-royalBlue hover:text-white py-2 rounded-lg "
            >
              Login
            </Link>
          </motion.div>
        </motion.div>
        <div className="text-white lg:block hidden font-Outfit h-full flex-[4] bg-signupbg bg-cover text-center bg-center">
          <div className="px-6">
            <motion.h1
              variants={animationVariants}
              initial="initial"
              animate="animate"
              transition={(animationVariants.transition, { delay: 0.3 })}
              className="max-w-[26ch] mx-auto mt-24 text-4xl font-[800]"
            >
              Join others in the road of finding the perfect cinema companion
              🍿🎬
            </motion.h1>
            <motion.p
              variants={animationVariants}
              initial="initial"
              animate="animate"
              transition={(animationVariants.transition, { delay: 0.3 })}
              className="mt-4 text-xl font-semibold"
            >
              Now you never have to hit the theatres alone!{" "}
              <span className="block italic font-thin">Signup for free</span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
