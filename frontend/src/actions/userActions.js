import axios from "axios";
const baseUrl = "http://localhost:3000/api/v1/user";

export const getUserDetails = async (setUser) => {
  try {
    const token = localStorage.getItem("token");
    const user = await axios.get(`${baseUrl}/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(user.data);
    if (user.data.success) {
      setUser(user.data.user);
      return {
        success: true,
      };
    } else {
      console.error(user.data.message);
      return {
        success: false,
      };
    }
  } catch (error) {
    console.log("Error occoured while fetching user details", error);
    return {
      success: false,
      message: error.message,
    };
  }
};

// update user details
export const updateUserDetails = async (data, setUser) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Data is: ", data);
    const response = await axios.put(`${baseUrl}/update`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (response.data.success) {
      console.log("Success");
      setUser(response.data.user);
      return {
        success: true,
        message: "Profile updated successfully",
      };
    } else {
      console.log("Failed!");
      return {
        success: false,
        message: `${response.message}: ${response.error.message}`,
      };
    }
  } catch (error) {
    console.log("Error occoured while updating user details", error);
    return {
      success: false,
      message: error.message,
    };
  }
};

// delete user
export const deleteUser = async (setUser) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${baseUrl}/delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.success) {
      setUser(null);
      return response;
    } else {
      return response;
    }
  } catch (error) {
    console.log("Error occoured while deleting user details", error);
    return {
      success: false,
      message: error.message,
    };
  }
};
