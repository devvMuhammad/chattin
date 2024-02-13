import MessageComponent from "./Message";
import SendMessage from "./SendMessage";

export type Message = {
  sender: string;
  receiver?: string; // present in private but not in public
  content: string;
  messageId: string;
  sentAt: string;
};

export default function ChatMessages({
  messages,
  chatId,
}: {
  messages: Message[];
  chatId: string;
}) {
  return (
    <>
      <main className="flex-1 overflow-auto p-4">
        {/* {!result.success ? (
          <h1 className="text-3xl font-bold ">{result?.message}</h1>
        ) : ( */}
        <div className="space-y-4">
          {/* LEFT AND RIGHT CHAT FOR GROUP CHAT */}
          {/* {chatId === "public" ? (
            <GroupMessages messages={result.messages} />
          ) : (
            <PersonalMessages />
          )} */}
          {messages.map(({ sender, content, sentAt, messageId }) => (
            <MessageComponent
              messageId={messageId}
              sender={sender}
              content={content}
              sentAt={sentAt}
              type={chatId === "public" ? "private" : "private"}
            />
          ))}
        </div>
        {/* )} */}
      </main>
      <footer className="border-t dark:border-zinc-700 p-4">
        <SendMessage />
      </footer>
    </>
  );
}
