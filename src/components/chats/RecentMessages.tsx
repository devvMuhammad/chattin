import MessageOverview from "./MessageOverview";

type RecentMessage = {
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
        <MessageOverview
          key={chatId}
          name={user === sender ? sender : receiver}
          text={recentMessage}
        />
      ))}
    </div>
  );
}
