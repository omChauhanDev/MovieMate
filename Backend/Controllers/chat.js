const Conversation = require("../Models/Conversation");
const Message = require("../Models/Message");
const { getReceiverSocketId } = require("../Socket/socket");
module.exports.getMessages = async (req, res, next) => {
  const userId = req.userId;
  try {
    const conversations = await Conversation.find({
      participants: userId,
    }).populate("messages");
    if (conversations) {
      return res.status(200).json(conversations.messages);
    } else {
      return res.status(200).json([]);
    }
  } catch (err) {
    next(err);
  }
};
module.exports.sendMessage = async (req, res, next) => {
  const { message, receiverId } = req.body;
  const senderId = req.userId;
  try {
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message: message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await conversation.save();
      const recieverSocketId = getReceiverSocketId(receiverId);
      if (recieverSocketId) {
        io.to(recieverSocketId).emit("newMessage", newMessage);
      }
      return res.status(200).json({ message: "Message sent successfully" });
    }
  } catch (err) {
    next(err);
  }
};
