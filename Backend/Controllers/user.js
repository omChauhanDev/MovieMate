const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const signupSchema = require("../Utils/User/signupSchema");
const signinSchema = require("../Utils/User/signinSchema");
const User = require("../Models/User");
const transporter = require("../Config/NodeMailerTransporter");
const emailSchema = require("../Utils/User/emailSchema");
const auth = require("../Middleware/auth");
const userEditSchema = require("../Utils/User/userEditSchema");
//not tested
router.get("/user", auth, async (req, res) => {
  User.findOne({ _id: req.userId }).then((user) => {
    //sending relevant items required
    res.status(200).json({});
  });
});

router.get("/otp", async (req, res) => {
  const verify = emailSchema.safeParse(req.body);
  if (verify.success) {
    const otp = Math.floor(Math.random() * 900000) + 100000;
    await transporter.sendMail({
      from: "MovieMate",
      to: req.body.email,
      subject: "OTP Verification",
      html: `<h1>OTP requested for your account</h1>
    <p>Here is your super secret OTP ${otp}</p>
    `,
    });
    res.status(201).json({ message: "Email sent successfully" });
  } else {
    console.log(verify.error.issues);
    res.status(400).json({ message: "Please send a valid email" });
  }
});

router.post("/signup", (req, res) => {
  const verify = signupSchema.safeParse(req.body);
  if (verify.success) {
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res.json(403).json({ message: "User already exists" });
      } else {
        //hashing the password
        bcrypt.hash(req.body.password, 10).then((hash) => {
          User.create({
            fullName: req.body.firstName + " " + req.body.lastName,
            email: req.body.email,
            password: hash,
            phoneNo: req.body.phoneNo,
            gender: req.body.gender,
          })
            .then(() => res.status(201).json({ message: "User created" }))
            .catch((err) => {
              console.log(err);
              return res.status(500).json({
                message: "Something went wrong. View the logs for more info",
              });
            });
        });
      }
    });
  } else {
    return res
      .status(400)
      .json({ message: "Incorrect inputs", errors: verify.error });
  }
});

router.post("/signin", (req, res) => {
  const verify = signinSchema.safeParse(req.body);
  if (verify.success) {
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        //comparing the hashed password
        bcrypt.compare(req.body.password, user.password).then((result) => {
          if (result) {
            return res.status(200).json({
              token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET),
            });
          } else {
            return res
              .status(400)
              .json({ message: "Incorrect username or password" });
          }
        });
      } else {
        return res.status(403).json({ message: "User does not exist" });
      }
    });
  } else {
    return res
      .status(400)
      .json({ message: "Incorrect inputs", errors: verify.error });
  }
});
//not tested
router.put("/user", auth, (req, res) => {
  const verify = userEditSchema.safeParse(req.body);
  if (verify.success) {
    //should update the details
  } else {
    return res
      .status(400)
      .json({ message: "Wrong inputs", error: verify.error.issues });
  }
});

//not tested
router.delete("/user", auth, (req, res) => {
  User.deleteOne({ _id: req.userId }).then((user) => {
    res.status(200).json({ message: `${user._id} deleted successfully` });
  });
});

module.exports = router;
