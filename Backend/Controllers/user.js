const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const signupSchema = require("../Utils/User/signupSchema");
const signinSchema = require("../Utils/User/signinSchema");
const userEditSchema = require("../Utils/User/userEditSchema");
const emailSchema = require("../Utils/User/emailSchema");

const User = require("../Models/User");
const transporter = require("../Config/NodeMailerTransporter");

exports.getDetails = (req, res) => {
  User.findOne({ _id: req.userId }).then((user) => {
    res.status(200).json({ user: user });
  });
};
exports.postOtp = async (req, res) => {
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
};

exports.signup = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    let hashedPassword;
    const fullName = firstName + " " + lastName;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Unable to hash password",
      });
    }

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    console.log("Signup Successful");
    console.log(user);
    return res.status(200).json({
      success: true,
      message: "User created successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User Does Not Exists!",
      });
    }

    const payload = {
      email: user.email,
      id: user.id,
      name: user.name,
    };

    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "15d",
      });

      console.log("Login Successful");

      return res.status(200).json({
        success: true,
        message: "User logged in successfully!",
        token: token,
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid Password!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//not tested
exports.putUser = (req, res) => {
  const verify = userEditSchema.safeParse(req.body);
  if (verify.success) {
    User.updateOne({ _id: req.userId }, req.body).then((user) => {
      return res.redirect("/api/v1/user/details");
    });
  } else {
    return res
      .status(400)
      .json({ message: "Wrong inputs", error: verify.error.issues });
  }
};
//not tested
exports.deleteUser = (req, res) => {
  User.deleteOne({ _id: req.userId }).then((user) => {
    res.status(200).json({ message: "deleted successfully" });
  });
};
