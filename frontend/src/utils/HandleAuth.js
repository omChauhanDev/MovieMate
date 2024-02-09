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

const sendOtp = async (email, name, otp) => {
  try {
    const response = await axios.post(`${baseUrl}/otp`, {
      email,
      name,
      otp,
    });
    console.log("Response is: ", response);
    return response;
  } catch (error) {
    console.log("Error occoured while sending OTP", error);
    return {
      success: false,
      message: error.message,
    };
  }
};

const login = async (email, password, setUser) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    const data = response.data;
    if (!data.success) {
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

export { signup, login, sendOtp };
