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
    user.password = "";
    res.status(200).json({ user: user });
  });
};

exports.sendOTP = async (req, res) => {
  try {
    const { email, name, otp } = req.body;

    console.log("itna toh theek hai");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists!",
      });
    }

    console.log("Check kar liya");

    const info = await transporter.sendMail({
      from: '"Movie Mate 🎬" <taskpilot.app@gmail.com>',
      to: `${email}`,
      subject: "Your One Time Password for Registration at Movie Mate",
      html: `
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          p {
          margin-bottom: 0;
          padding-bottom: 0;
          }
        </style>
      </head>
      <body>
        <h3>Hello ${name}!</h3>
        <p>Your one-time password for registering an account at <b>Movie Mate</b> is: <b>${otp}</b></p>
        <p>Get ready to make unforgettable memories and forge lasting friendships through the magic of cinema with <b>Move Mate</b></p>

        <p>Lights, camera, action!</p>
        <p>Best regards,<br>
        Movie Mate Team</p>
      </body>
    </html>
  `,
    });
    return res.json({
      success: true,
      message: "OTP sent successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    let hashedPassword;
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
      console.log("Yeh lo token", token);
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
