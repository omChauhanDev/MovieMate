const jwt = require("jsonwebtoken");
const User = require("../Models/User");
require("dotenv").config();
module.exports = function (req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    User.findOne({ _id: userId }).then((user) => {
      if (user) {
        req.userId = userId;
        next();
      } else {
        return req.status(403).json({ message: "User does not exist" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Invalid token" });
  }
};
