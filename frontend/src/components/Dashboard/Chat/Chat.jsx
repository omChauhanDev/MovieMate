import React from "react";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatMessage from "./ChatMessage/ChatMessage";

const Chat = () => {
  return (
    <div className="flex w-full">
      <ChatSidebar />
      <ChatMessage />
    </div>
  );
};

export default Chat;
