import { getUserDetails } from "@/actions/userActions";
import axios from "axios";
const baseUrl = "http://localhost:3000/api/v1/user";

const signup = async (fullName, email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, {
      fullName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error occurred while creating account");
  }
};

const sendOtp = async (email, otp, purpose, name = "") => {
  try {
    const response = await axios.post(`${baseUrl}/otp`, {
      email,
      name,
      otp,
      purpose,
    });
    return response;
  } catch (error) {
    console.log("Error occoured while sending OTP", error);
    return {
      success: false,
      message: error.message,
    };
  }
};

const login = async (email, password, setUser, setErrorMessage) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    const data = response.data;
    if (!data.success) {
      setErrorMessage(data.message);
      console.log("Error occoured while getting response from backend.");
      return;
    } else {
      localStorage.setItem("token", data.token);
      getUserDetails(setUser);
      return data;
    }
  } catch (error) {
    console.log("Error occoured while logging in:", error);
    return {
      data: {
        success: false,
        message: "This User is not registered",
      },
    };
  }
};

const forgotPassword = async (email, password, setErrorMessage) => {
  try {
    const response = await axios.put(`${baseUrl}/forgot-password`, {
      email,
      password,
    });
    const data = response.data;
    if (!data.success) {
      setErrorMessage(data.message);
      console.log("Error occoured while getting response from backend.");
      return;
    } else {
      return data;
    }
  } catch (error) {
    console.log("Error occoured while changing password", error);
    return {
      data: {
        success: false,
        message: "This user is not registered",
      },
    };
  }
};

export { signup, login, sendOtp, forgotPassword };
