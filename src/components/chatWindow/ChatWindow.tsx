import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmileIcon } from "@/components/ui/icons";
import ChatName from "./ChatName";
import { Avatar, AvatarFallback } from "../ui/avatar";
import GroupMessages from "./GroupMessages";
import PersonalMessages from "./PersonalMessages";
import SendMessage from "./SendMessage";
import getMessages from "@/db/helpers/getMessages";

type Message = {
  chatType?: "group" | "personal";
  sender: string;
  receiver: string;
  time: Date;
  senderImageURL: string;
};

// const messages: Message[] = [{  }];

export default async function ChatWindow({ chatId }: { chatId: string }) {
  // Chat window can be of group chat or personal chat
  // in personal chat, the name & profilePic is already shown on the top, so no need to show it in the chat
  // in group chat, the name and avatar should be shown
  const user = "Muhammad Amjad";
  const result = await getMessages({
    type: chatId === "public" ? "public" : "private",
    chatId,
    user,
  });
  console.log(result);
  return (
    <section className="flex flex-col w-full">
      <ChatName />
      <main className="flex-1 overflow-auto p-4">
        {!result.success ? (
          <h1 className="text-3xl font-bold ">{result?.message}</h1>
        ) : (
          <div className="space-y-4">
            {/* LEFT AND RIGHT CHAT FOR GROUP CHAT */}
            {chatId === "public" ? <GroupMessages /> : <PersonalMessages />}
          </div>
        )}
      </main>
      <footer className="border-t dark:border-zinc-700 p-4">
        <SendMessage />
      </footer>
    </section>
  );
}
