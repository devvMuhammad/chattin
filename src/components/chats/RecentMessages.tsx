"use client";
import { useTransition } from "react";
import RecentMessage from "./RecentMessage";
import { useRouter } from "next/navigation";
// import MessageOverviewfrom "./RecentMessage";

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
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <div className="space-y-3 max-h-[75vh] overflow-y-auto overflow-x-hidden">
      {recentMessages.map(({ sender, receiver, recentMessage, chatId }) => (
        <RecentMessage
          key={chatId}
          name={sender !== user ? sender : receiver} // if user is not the sender then he must be the receiver
          recentMessage={recentMessage}
          chatId={chatId}
          // startTransition={startTransition}
          isPending={isPending}
          onClick={() =>
            startTransition(() => {
              console.log("tranistion happening");
              router.push(`/chat/${chatId}`);
            })
          }
        />
      ))}
    </div>
  );
}
