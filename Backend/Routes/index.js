const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const friendshipRouter = require("./friendship");
const chatRouter = require("./chat");
router.use("/user", userRouter);
router.use("/friend", friendshipRouter);
router.use("/chat", chatRouter);
module.exports = router;
