import axios from "axios";
const baseUrl = "http://localhost:3000/api/v1/user";

const signup = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, {
      firstName,
      lastName,
      email,
      password,
    });
    console.log(response.data.name);
    return response.data;
  } catch (error) {
    console.error("Error occurred while creating account");
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    const data = response.data;
    if (!data.success) {
      console.log("Error occoured while getting response from backend.");
      return;
    } else {
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

export { signup, login };
