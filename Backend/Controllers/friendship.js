const Friendship = require("../Models/Friendship");
const User = require("../Models/User");

exports.sendFriendReq = async (req, res) => {
  try {
    const userId = req.userId;
    const friendId = req.body.friendId;
    if (!userId || !friendId) {
      return res.status(400).json({
        success: false,
        message: "userId and friendId are required",
      });
    }

    // Checking if the friend request already exists or they are already friends
    const existingRequest = await Friendship.findOne({
      $or: [
        { user1: userId, user2: friendId },
        { user1: friendId, user2: userId },
      ],
    });
    if (existingRequest) {
      return res.status(400).json({
        success: false,
        message: "Friendship request already exist.",
      });
    }

    // Creating new friend request
    const newRequest = await Friendship.create({
      user1: userId,
      user2: friendId,
    });
    if (newRequest) {
      const user1 = await User.findByIdAndUpdate(userId, {
        $push: { friends: newRequest._id },
      });
      const user2 = await User.findByIdAndUpdate(friendId, {
        $push: { friends: newRequest._id },
      });
      return res.status(200).json({
        newRequest: newRequest,
        success: true,
        message: "Friend request sent successfully.",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Unable to send friend request.Try again after sometime.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while sending friend request.",
    });
  }
};

exports.cancelFriendReq = async (req, res) => {
  try {
    const userId = req.userId;
    const friendId = req.body.friendId;
    if (!userId || !friendId) {
      return res.status(400).json({
        success: false,
        message: "userId and friendId are required",
      });
    }

    // Checking if the friend request exists
    const pendingRequest = await Friendship.findOne({
      user1: userId,
      user2: friendId,
    });
    if (!pendingRequest) {
      return res.status(404).json({
        success: false,
        message: "No pending friend request found from user to friend.",
      });
    }

    // Cancelling Friend Request
    await Friendship.findByIdAndDelete(pendingRequest._id);

    const updatedUser1 = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: pendingRequest._id } },
      { new: true }
    );
    const updatedUser2 = await User.findByIdAndUpdate(
      friendId,
      { $pull: { friends: pendingRequest._id } },
      { new: true }
    );

    if (!updatedUser1 || !updatedUser2) {
      return res.status(500).json({
        success: false,
        message:
          "Error updating users' friends arrays while cancelling friend request.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Friend request cancelled successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while unsending friend request.",
    });
  }
};

exports.acceptFriendReq = async (req, res) => {
  try {
    const userId = req.userId;
    const friendId = req.body.friendId;
    if (!userId || !friendId) {
      return res.status(400).json({
        success: false,
        message: "userId and friendId are required",
      });
    }
    // Checking if the friend request exists and accept
    const pendingRequest = await Friendship.findOneAndUpdate(
      { user1: friendId, user2: userId },
      { $set: { status: "accepted" } },
      { new: true }
    );
    if (!pendingRequest) {
      return res.status(404).json({
        success: false,
        message: "No pending friend request from friend to user.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Friend request accepted successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while accepting friend request.",
    });
  }
};

exports.rejectFriendReq = async (req, res) => {
  try {
    const userId = req.userId;
    const friendId = req.body.friendId;
    if (!userId || !friendId) {
      return res.status(400).json({
        success: false,
        message: "userId and friendId are required",
      });
    }

    // Checking if the friend request exists
    const pendingRequest = await Friendship.findOne({
      user1: friendId,
      user2: userId,
    });
    if (!pendingRequest) {
      return res.status(404).json({
        success: false,
        message: "No pending friend request found from friend to user.",
      });
    }

    // Cancelling Friend Request
    await Friendship.findByIdAndDelete(pendingRequest._id);

    const updatedUser1 = await User.findByIdAndUpdate(
      friendId,
      { $pull: { friends: pendingRequest._id } },
      { new: true }
    );
    const updatedUser2 = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: pendingRequest._id } },
      { new: true }
    );

    if (!updatedUser1 || !updatedUser2) {
      return res.status(500).json({
        success: false,
        message:
          "Error updating users' friends arrays while rejecting friend request.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Friend request rejected successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while rejecting friend request.",
    });
  }
};

exports.rejectFriendReq = async (req, res) => {
  try {
    const userId = req.userId;
    const friendId = req.body.friendId;
    if (!userId || !friendId) {
      return res.status(400).json({
        success: false,
        message: "userId and friendId are required",
      });
    }

    // Checking if the friend request exists
    const pendingRequest = await Friendship.findOne({
      user1: friendId,
      user2: userId,
    });
    if (!pendingRequest) {
      return res.status(404).json({
        success: false,
        message: "No pending friend request found from friend to user.",
      });
    }

    // Cancelling Friend Request
    await Friendship.findByIdAndDelete(pendingRequest._id);

    const updatedUser1 = await User.findByIdAndUpdate(
      friendId,
      { $pull: { friends: pendingRequest._id } },
      { new: true }
    );
    const updatedUser2 = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: pendingRequest._id } },
      { new: true }
    );

    if (!updatedUser1 || !updatedUser2) {
      return res.status(500).json({
        success: false,
        message:
          "Error updating users' friends arrays while rejecting friend request.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Friend request rejected successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while rejecting friend request.",
    });
  }
};

exports.removeFriend = async (req, res) => {
  try {
    const userId = req.userId;
    const friendId = req.body.friendId;
    if (!userId || !friendId) {
      return res.status(400).json({
        success: false,
        message: "userId and friendId are required",
      });
    }

    // Checking if they are friends or not
    const existingRequest = await Friendship.findOne({
      $or: [
        { user1: userId, user2: friendId },
        { user1: friendId, user2: userId },
      ],
    });
    if (!existingRequest) {
      return res.status(400).json({
        success: false,
        message: "Friendship between the users does not exist.",
      });
    }

    await Friendship.findByIdAndDelete(existingRequest._id);

    const updatedUser1 = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: existingRequest._id } },
      { new: true }
    );
    const updatedUser2 = await User.findByIdAndUpdate(
      friendId,
      { $pull: { friends: existingRequest._id } },
      { new: true }
    );

    if (!updatedUser1 || !updatedUser2) {
      return res.status(500).json({
        success: false,
        message: "Error updating users' friends arrays while removing friend.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Friend removed successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while removing friend.",
    });
  }
};

exports.getAllFriends = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId required",
      });
    }
    const user = await User.findById(userId).populate("friends");
    const friends = user.friends;

    return res.status(200).json({
      success: true,
      data: friends,
      message: "Friends fetched successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while fetching user friends'.",
    });
  }
};
