const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const friendshipRouter = require("./friendship");

router.use("/user", userRouter);
router.use("/friend", friendshipRouter);
module.exports = router;
