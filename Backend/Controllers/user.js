const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signupSchema = require("../Utils/user");
const User = require("../Models/User");

router.post("/signup", (req, res) => {
  const verify = signupSchema.safeParse(req.body);
  if (verify.success) {
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        res.json(403).json({ message: "User already exists" });
      } else {
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
              res.status(500).json({
                message: "Something went wrong. View the logs for more info",
              });
            });
        });
      }
    });
  } else {
    return res.status(400).json({ message: "Incorrect inputs" });
  }
});
module.exports = router;
