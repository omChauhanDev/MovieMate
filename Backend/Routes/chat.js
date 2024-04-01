const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require("../Controllers/chat");
router.post("/sendMessage", sendMessage);
router.get("/getMessages", getMessages);
module.exports = router;
