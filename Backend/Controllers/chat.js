const Messages = require("../Models/Messages");
const Conversation = require("../Models/Conversations");

exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, message } = req.body;
    const senderId = req.userId;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = await Messages.create({
      senderId: senderId,
      receiverId: receiverId,
      message: message,
    });
    // Add the new message to the conversation
    conversation.messages.push(newMessage._id);
    await conversation.save();

    return res
      .status(200)
      .json({ success: true, message: "Message has been sent" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Please check the console for errors" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { receiverId } = req.body;
    const senderId = req.userId;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    if (!conversation) {
      return res.status(200).json({ success: true, message: [] });
    }
    return res
      .status(200)
      .json({ success: true, messages: conversation.messages });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Please check the console for errors" });
  }
};
