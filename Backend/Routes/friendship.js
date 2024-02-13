const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const {
    sendFriendReq,
    cancelFriendReq,
    acceptFriendReq,
    rejectFriendReq,
    getAllFriends,
    removeFriend,
} = require("../Controllers/friendship");

// Create
router.post("/sendFriendRequest", auth, sendFriendReq);

// Read
router.get("/getAllFriends", auth, getAllFriends);

// Update
router.post("/acceptFriendRequest", auth, acceptFriendReq);
router.post("/rejectFriendRequest", auth, rejectFriendReq);

// Delete
router.delete("/removeFriend", auth, removeFriend);
router.delete("/cancelFriendRequest", auth, cancelFriendReq,);
module.exports = router;