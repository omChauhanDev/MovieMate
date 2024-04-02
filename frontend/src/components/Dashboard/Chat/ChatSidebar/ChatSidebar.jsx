import React from "react";
import Conversation from "./Conversation";

function ChatSidebar() {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`${process.env.VITE_BASEURL}/friend/getAllFriends`);
        setConversations(res.data.conversations);
      } catch (err) {
        console.log(err);
      }
    };
    // getConversations();
  });
  return (
    <div className="py-2 flex flex-col overflow-auto min-w-[25rem]">
      {conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					lastIdx={idx === conversations.length - 1}
				/>
			))}
    </div>
  );
}

export default ChatSidebar;
