import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const onSubmit = (data) => {
    console.log("data ->", data);
  };

  const otpHandler = () => {
    //if backend was able to send the otp successfully :
    setOtpSent(true);
    toast.success("OTP sent on email!", {
      style: {
        fontWeight: "bold",
      },
    });
  };

  const changePasswordHandler = () => {
    //TODO: change the password in the database
  };

  return (
    <div className="flex-1 flex justify-center items-center screen">
      <div className="w-[25%] font-Poppins text-center rounded-xl px-6 py-16 bg-white">
        {!otpSent && (
          <>
            <h1 className="text-3xl font-bold">Reset Your Password</h1>
            <p className="font-[300]">Enter your registered email address</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-[80%] mx-auto mt-8"
            >
              <input
                {...register("email")}
                type="email"
                required
                placeholder="Email"
                className="p-2 rounded-lg border w-full border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />
              <button
                className="bg-steelBlue mt-4 outline text-white py-2 px-3 rounded-lg font-[500]"
                type="submit"
                onClick={otpHandler}
              >
                Send OTP
              </button>
            </form>
          </>
        )}
        {otpSent && (
          <>
            <h1 className="text-3xl font-bold">Enter New Password</h1>
            <p className="font-[300]">Set a new password for this account</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-[80%] mx-auto gap-4 mt-8"
            >
              <input
                {...register("password")}
                type="password"
                required
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 rounded-lg border w-full border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />

              <input
                type="password"
                required
                placeholder="Confirm New Password"
                onChange={(e) => setConfirmPassword(password == e.target.value)}
                className="p-2 rounded-lg border w-full border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />
              <button
                className={`${
                  confirmPassword
                    ? "bg-steelBlue"
                    : "bg-gray-600 cursor-not-allowed"
                }  mt-2 text-white py-2 px-3 outline rounded-lg font-[500]`}
                disabled={!password || !confirmPassword}
                onClick={changePasswordHandler}
              >
                Change Password
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
