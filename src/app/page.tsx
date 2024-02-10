import ChatWindow from "@/components/chatWindow/ChatWindow";
import Chats from "@/components/chats/Chats";

export default function Component() {
  return (
    <div key="1" className="flex h-screen">
      <Chats />
      <ChatWindow />
    </div>
  );
}
