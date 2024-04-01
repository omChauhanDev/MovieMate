import React from "react";
import Header from "./Header";
import MessageWindow from "./MessageWindow";
import MessageBox from "./MessageBox";

function ChatMessage() {
  return (
    <div className="w-full bg-red-200">
      <Header />
      <MessageWindow />
      <MessageBox />
    </div>
  );
}

export default ChatMessage;
