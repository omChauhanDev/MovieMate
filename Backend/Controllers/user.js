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
  try {
    User.findOne({ _id: req.userId }).then((user) => {
      user.password = "";
      res.status(200).json({ success: true, user: user });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.sendOTP = async (req, res) => {
  try {
    const { email, name, otp, purpose } = req.body;
    const existingUser = await User.findOne({ email });
    if (purpose == "Signup") {
      if (existingUser) {
        return res.json({
          success: false,
          message: "User already exists!",
        });
      }
    }

    if (purpose == "forgotPassword") {
      if (!existingUser) {
        return res.json({
          success: false,
          message: "User does not exists!",
        });
      }
      var username = existingUser.fullName;
    }

    let subject, htmlContent;
    switch (purpose) {
      case "Signup":
        subject = "Your One Time Password for Registration at Movie Mate";
        htmlContent = `
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
              <p>Get ready to make unforgettable memories and forge lasting friendships through the magic of cinema with <b>Movie Mate</b></p>
              <p>Lights, camera, action!</p>
              <p>Best regards,<br>
              Movie Mate Team</p>
            </body>
          </html>
        `;
        break;
      case "forgotPassword":
        subject = "Your One Time Password (OTP) for Password Change";
        htmlContent = `
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your One Time Password (OTP) for Password Change</title>
          </head>
          <body style="font-family: Arial, sans-serif;">     
            <h2 style="color: #333;">Your One Time Password (OTP) for Password Change</h2>        
            <p>Dear ${username},</p>        
            <p>We have received a request to change the password associated with your account. To ensure the security of your account, we require verification before proceeding with this change.</p>
            <p>Your One Time Password (OTP) for password change is: <strong>${otp}</strong></p>
            <p>Best regards,<br>
            Movie Mate Team</p>
          
          </body>
          </html>
        `;
        break;
      default:
        return res.status(400).json({
          success: false,
          message: "Invalid purpose provided.",
        });
    }

    const info = await transporter.sendMail({
      from: '"Movie Mate 🎬" <taskpilot.app@gmail.com>',
      to: `${email}`,
      subject: subject,
      html: htmlContent,
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

exports.forgotPassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User Does Not Exists!",
      });
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Unable to hash password",
      });
    }

    await User.findOneAndUpdate({
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: "Password changed successfully!",
    });
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
    res.status(200).json({ success: true, message: "User deleted successfully" });
  });
};
