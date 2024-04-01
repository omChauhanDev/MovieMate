import React from "react";

function MessageBox() {
  return (
    <div className="flex justify-center py-auto translate-y-1/2">
      <input
        type="text"
        placeholder="Send a message"
        className="p-2 w-[60rem] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button className="px-2 py-1 bg-blue-600 text-white rounded-md ml-2">
        Send
      </button>
    </div>
  );
}

export default MessageBox;
