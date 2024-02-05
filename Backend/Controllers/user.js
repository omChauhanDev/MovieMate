const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const signupSchema = require("../Utils/User/signupSchema");
const signinSchema = require("../Utils/User/signinSchema");
const User = require("../Models/User");
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
module.exports = router;
