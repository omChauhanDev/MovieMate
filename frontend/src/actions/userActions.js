import axios from "axios";
const baseUrl = "http://localhost:3000/api/v1/user";

//get token from local storage
const token = localStorage.getItem("token");
export const getUserDetails = async (setUser) => {
  try {
    const user = await axios.get(`${baseUrl}/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (user.data.success) {
      setUser(user.data.user);
    } else {
      console.error(user.data.message);
      return;
    }
  } catch (error) {
    console.log("Error occoured while fetching user details", error);
    return {
      success: false,
      message: error.message,
    };
  }
};
