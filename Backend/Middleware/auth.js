const jwt = require("jsonwebtoken");
const User = require("../Models/User");
require("dotenv").config();

module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log(data);
    const userId = data.id;
    console.log("User id hai: ", userId);
    User.findOne({ _id: userId }).then((user) => {
      if (user) {
        req.userId = userId;
        next();
      } else {
        return res.status(403).json({ message: "User does not exist" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Expected a token" });
  }
};
