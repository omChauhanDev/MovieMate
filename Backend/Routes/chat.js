const express = require("express");
const { sendMessage, getMessages } = require("../Controllers/chat");
const authenticatUser = require("../Middleware/auth");
const router = express.Router();
router.post("/sendMessage", authenticatUser, sendMessage);
router.get("/getMessages", authenticatUser, getMessages);
module.exports = router;
