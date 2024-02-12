const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const {
  sendOTP,
  signup,
  login,
  updateUser,
  deleteUser,
  getDetails,
  forgotPassword,
} = require("../Controllers/user");
router.get("/details", auth, getDetails);
router.post("/otp", sendOTP);
router.post("/signup", signup);
router.post("/login", login);
router.put("/update", auth, updateUser);
router.put("/forgot-password", forgotPassword);
router.delete("/delete", auth, deleteUser);
module.exports = router;
