import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { forgotPassword, sendOtp } from "@/utils/HandleAuth";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [otpMatched, setOtpMatched] = useState(false);
  const [getNewPassword, setGetNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const passwordRegex = /^\S{6,}$/;

  function generateOTP() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join(
      ""
    );
  }

  const otpHandler = async (data) => {
    const email = data.email;
    const otp = generateOTP();
    const purpose = "forgotPassword";
    setLoading(true);
    const response = await sendOtp(email, otp, purpose);
    setLoading(false);

    if (response.data.success) {
      setOtp(otp);
      setOtpSent(true);
      toast.success("OTP sent on email!", {
        style: {
          fontWeight: "bold",
        },
      });
    } else {
      setErrorMessage(response.data.message);
    }
  };
  const otpVerificationHandler = (e) => {
    if (otp && otp == e.target.value) {
      setOtpMatched(true);
    }
  };

  const changePasswordHandler = async (data) => {
    const password = data.password;

    if (!passwordRegex.test(password)) {
      setErrorMessage("Your password must contain atleast 6 characters");
      return;
    }

    setLoading(true);
    const response = await forgotPassword(
      data.email,
      data.password,
      setErrorMessage
    );
    setLoading(false);
    if (response.success) {
      toast.success(response.message);
    }
    navigate("/login");
  };

  return (
    <div className="flex-1 px-8 flex justify-center items-center screen">
      <div className="min-w-[25%] min-h-[22rem] flex flex-col justify-center items-center font-Poppins text-center rounded-xl px-8 py-16 bg-white/70 border shadow-xl border-gray-200">
        {!getNewPassword && (
          <>
            <h1 className="md:text-3xl text-2xl font-bold">
              Reset Your Password
            </h1>
            <p className="font-[300]">Enter your registered email address</p>
            <form
              onSubmit={handleSubmit(otpHandler)}
              className="flex flex-col gap-2 w-full mx-auto mt-8"
            >
              <input
                {...register("email")}
                type="email"
                required
                placeholder="Email"
                disabled={otpSent}
                onChange={() => setErrorMessage("")}
                className="p-2 rounded-lg border w-full border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />
              {errorMessage && (
                <p className="text-red-500 text-left font-[500]">
                  {errorMessage}
                </p>
              )}
              {!loading && !otpSent && (
                <button
                  className="bg-steelBlue mt-2 outline text-white py-2 px-3 rounded-lg font-[500]"
                  type="submit"
                >
                  Send OTP
                </button>
              )}
            </form>
          </>
        )}

        {otpSent && !getNewPassword && (
          <div className="w-full flex flex-col gap-3 mt-4">
            <input
              type="number"
              onChange={otpVerificationHandler}
              placeholder="Enter OTP"
              className="p-2 w-full rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            />
            <button
              disabled={!otpMatched}
              className={`${
                otpMatched
                  ? "bg-steelBlue active:bg-royalBlue"
                  : "bg-gray-600 cursor-not-allowed"
              } py-2 text-white px-4 font-[500] outline-none rounded-md`}
              type="button"
              onClick={() => {
                if (otpMatched) {
                  setGetNewPassword(true);
                }
              }}
            >
              Submit OTP
            </button>
          </div>
        )}

        {loading && !getNewPassword && (
          <div role="status" className="mx-auto mt-6">
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

        {getNewPassword && (
          <>
            <h1 className="text-3xl font-bold">Enter New Password</h1>
            <p className="font-[300]">Set a new password for this account</p>
            <form
              onSubmit={handleSubmit(changePasswordHandler)}
              className="flex flex-col w-[80%] mx-auto gap-4 mt-8"
            >
              <input
                {...register("password")}
                type="password"
                required
                placeholder="New Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
                className="p-2 rounded-lg border w-full border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />

              <input
                type="password"
                required
                placeholder="Confirm New Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrorMessage("");
                }}
                className="p-2 rounded-lg border w-full border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />

              {confirmPassword && password !== confirmPassword && (
                <p className="text-red-500 font-[500]">
                  Passwords do not match!
                </p>
              )}

              {errorMessage && (
                <p className="text-red-500 text-left font-[500]">
                  {errorMessage}
                </p>
              )}

              {loading && getNewPassword && (
                <div role="status" className="mx-auto mt-6">
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

              {!loading && (
                <button
                  className={`${
                    confirmPassword && confirmPassword == password
                      ? "bg-steelBlue"
                      : "bg-gray-600 cursor-not-allowed"
                  }  mt-2 text-white py-2 px-3 outline rounded-lg font-[500]`}
                  disabled={!password || !confirmPassword}
                >
                  Change Password
                </button>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};
