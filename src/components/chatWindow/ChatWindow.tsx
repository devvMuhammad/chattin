import ChatMessages from "./ChatMessages";
import ChatName from "./ChatName";
import getMessages from "@/db/helpers/getMessages";
import { redirect } from "next/navigation";

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
  if (!result.success) redirect("/chat/public");
  console.log(result.messages);
  return (
    <section className="flex flex-col w-full">
      <ChatName />
      <ChatMessages messages={result.messages} chatId={chatId} />
    </section>
  );
}
