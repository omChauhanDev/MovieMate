const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const {
  postOtp,
  postSignup,
  postSignin,
  putUser,
  deleteUser,
  getDetails,
} = require("../Controllers/user");
router.get("/details", auth, getDetails);
router.post("/otp", postOtp);
router.post("/signup", postSignup);
router.post("/signin", postSignin);
router.put("/update", auth, putUser);
router.delete("/delete", auth, deleteUser);
module.exports = router;
