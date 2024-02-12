import ChatWindow from "@/components/chatWindow/ChatWindow";
import SidebarChats from "@/components/chats/SidebarChats";

// in personal message, there is no sender as that is already set in the whole object
type PersonalMessage = {
  messageId: string;
  content: string;
  timestamp: Date;
};

type PublicMessage = {
  sender: string;
  messageId: string;
  content: string;
  timestamp: Date;
};

type PersonalChat = {
  sender: string;
  receiver: string;
  messages: PersonalMessage[];
};

export default function Component() {
  return (
    <div key="1" className="flex h-screen">
      <SidebarChats />
      <ChatWindow />
    </div>
  );
}
