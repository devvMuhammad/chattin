import ChatWindow from "@/components/chatWindow/ChatWindow";
import SidebarChats from "@/components/chats/SidebarChats";

export default function Component() {
  return (
    <div key="1" className="flex h-screen">
      <SidebarChats />
      <ChatWindow />
    </div>
  );
}
