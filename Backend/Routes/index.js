const express = require("express");
const auth = require("../Middleware/auth");

const router = express.Router();
const userRouter = require("./user");
const friendshipRouter = require("./friendship");
const fileUploadRouter = require("./fileUpload");
const chatRouter = require("./chat");

router.use("/user", userRouter);
router.use("/friend", auth, friendshipRouter);
router.use("/upload", auth, fileUploadRouter);
router.use("/chat", auth, chatRouter);
module.exports = router;
