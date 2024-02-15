import ChatWindow from "@/components/chatWindow/ChatWindow";
import MessagesSkeleton from "@/components/chatWindow/MessagesSkeleton";
import SidebarChats from "@/components/chats/SidebarChats";
import getMessages from "@/db/helpers/getMessages";
import { Suspense } from "react";

// in personal message, there is no sender as that is already set in the whole object
type PersonalMessage = {
  messageId: string;
  content: string;
  timestamp: Date;
};

type PersonalChat = {
  sender: string;
  receiver: string;
  messages: PersonalMessage[];
};

type ChatPageProps = {
  params: {
    chatId: string;
  };
};

export default function Component({ params: { chatId } }: ChatPageProps) {
  return (
    <div key="1" className="flex h-screen">
      {/* <Suspense fallback={<span>what is goin on?</span>}> */}
      <SidebarChats />
      <Suspense key={chatId} fallback={<MessagesSkeleton />}>
        <ChatWindow chatId={chatId} />
      </Suspense>
    </div>
  );
}
