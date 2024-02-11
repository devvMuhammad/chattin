import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmileIcon } from "@/components/ui/icons";
import ChatName from "./ChatName";
import { Avatar, AvatarFallback } from "../ui/avatar";
import GroupMessages from "./GroupMessages";
import PersonalMessages from "./PersonalMessages";

type Message = {
  chatType?: "group" | "personal";
  sender: string;
  receiver: string;
  time: Date;
  senderImageURL: string;
};

// const messages: Message[] = [{  }];

export default function ChatWindow() {
  // Chat window can be of group chat or personal chat
  // in personal chat, the name & profilePic is already shown on the top, so no need to show it in the chat
  // in group chat, the name and avatar should be shown
  const user = "muhammad";
  return (
    <section className="flex flex-col w-full">
      <ChatName />
      <main className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {/* LEFT AND RIGHT CHAT FOR GROUP CHAT */}
          <GroupMessages />
          <PersonalMessages />
        </div>
      </main>
      <footer className="border-t dark:border-zinc-700 p-4">
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <SmileIcon className="w-6 h-6" />
          </Button>
          <Input className="flex-1" placeholder="Type a message..." />
          <Button>Send</Button>
        </div>
      </footer>
    </section>
  );
}
