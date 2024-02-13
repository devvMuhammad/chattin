"use client";
import RecentMessage from "./RecentMessage";
// import MessageOverview from "./RecentMessage";

export type RecentMessage = {
  sender: string;
  receiver: string;
  chatId: string;
  recentMessage: string;
};

export default function RecentMessages({
  recentMessages,
  user,
}: {
  user: string;
  recentMessages: RecentMessage[];
}) {
  return (
    <div className="space-y-3">
      {recentMessages.map(({ sender, receiver, recentMessage, chatId }) => (
        <RecentMessage
          key={chatId}
          // sender={sender}
          // receiver={receiver}
          name={sender !== user ? sender : receiver} // if user is not the sender then he must be the receiver
          recentMessage={recentMessage}
          chatId={chatId}
        />
      ))}
    </div>
  );
}
