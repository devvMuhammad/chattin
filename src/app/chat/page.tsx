import ChatWindow from "@/components/chatWindow/ChatWindow";
import SidebarChats from "@/components/chats/SidebarChats";

type PersonalMessage = {
  messageId: string;
  content: string;
  timestamp: Date;
};

type PublicMessage = {
  messageId: string;
  sender: string;
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
