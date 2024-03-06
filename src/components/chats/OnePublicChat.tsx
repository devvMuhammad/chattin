"use client";
import RecentMessage from "./RecentMessage";

export default function OnePublicChat({
  content,
  isPending,
  onClick,
}: {
  content: string;
  isPending: boolean;
  onClick: () => void;
}) {
  return (
    <RecentMessage
      key="public"
      name="Public Chat" // if user is not the sender then he must be the receiver
      recentMessage={content}
      chatId="public"
      isPending={isPending}
      onClick={onClick}
    />
  );
}
