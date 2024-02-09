const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const {
    sendFriendReq,
    unsendFriendReq,
    acceptFriendReq,
    rejectFriendReq,
    removeFriend,
} = require("../Controllers/friendship");

// Create
router.post("/sendFriendRequest", auth, sendFriendReq);

// Read
router.get("/friends", auth, getAllFriends);

// Update
router.post("/acceptFriendRequest", auth, acceptFriendReq);
router.post("/rejectFriendRequest", auth, rejectFriendReq);

// Delete
router.delete("/removeFriend", auth, removeFriend);
router.delete("/unsendFriendRequest", auth, unsendFriendReq);
module.exports = router;