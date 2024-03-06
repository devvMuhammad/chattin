"use client";
import { useEffect, useState, useTransition } from "react";
import RecentMessage from "./RecentMessage";
import { usePathname, useRouter } from "next/navigation";
import OnePublicChat from "./OnePublicChat";
import { useTestAuthContext } from "../test-auth";
import { pusherClient as pusher } from "@/pusher/client";
import { Channel } from "pusher-js";
import { Message } from "../chatWindow/ChatMessages";
import ChatName from "../chatWindow/ChatName";
// import MessageOverviewfrom "./RecentMessage";

export type RecentMessage = {
  sender: string;
  receiver: string;
  chatId: string;
  recentMessage: string;
};

type RecentPublicMessage = {
  sender: string;
  content: string;
};

export default function RecentMessages({
  initialRecentMessages,
  publicLastMessage,
  publicLastMessageSender,
  user,
}: {
  user: string;
  publicLastMessageSender: string;
  publicLastMessage: string;
  initialRecentMessages: RecentMessage[];
}) {
  //* later replace by the user from the next-auth session provider
  const { user: currentUser } = useTestAuthContext();
  //* use searchParams to get the chatId as it is a client component
  const chatId = usePathname().split("/chat/")[1];
  console.log("this is the chatID", chatId);
  const [recentPublicMessage, setRecentPublicMessage] =
    useState<RecentPublicMessage>({
      sender: publicLastMessageSender,
      content: publicLastMessageSender,
    });
  const [recentPrivateMessages, setRecentPrivateMessages] = useState<
    RecentMessage[]
  >(initialRecentMessages);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const recentMessageEventHandler = (
    message: Message,
    handleType: "private" | "public"
  ) => {
    console.log("listeing inside the message event handler");
    //! public chat handling
    if (handleType === "public") {
      setRecentPublicMessage({
        sender: message.sender,
        content: message.content,
      });
      return;
    }
    //! private chat handling
    setRecentPrivateMessages((prev) => {
      const copy = [...prev];
      copy.push({
        chatId: chatId,
        receiver: message.receiver as string,
        sender: message.sender,
        recentMessage: message.content,
      });
      return copy;
    });
  };

  useEffect(() => {
    console.log("LISTENING HERE INSIDE THE CHATSBAR");
    const channelName = chatId === "public" ? "public" : `private_${chatId}`;
    // console.log(channelName, chatId);
    let channel: Channel;
    if (chatId === "public") {
      channel = pusher.subscribe("public");
      channel.bind("message", (message: Message) =>
        recentMessageEventHandler(message, "public")
      );
    } else {
      channel = pusher.subscribe("private_" + chatId);
      channel.bind("message-private", (message: Message) =>
        recentMessageEventHandler(message, "private")
      );
    }
    return () => {
      pusher.unsubscribe(channelName);
      channel.unbind("message");
      channel.unbind("message-private");
    };
  }, [currentUser]);

  return (
    <>
      <OnePublicChat
        content={`${recentPublicMessage.sender}: ${recentPublicMessage.content}`}
        isPending={isPending}
        onClick={() =>
          startTransition(() => {
            console.log("tranistion happening");
            router.push("/chat/public", { scroll: false });
          })
        }
      />{" "}
      {recentPrivateMessages.map(
        ({ sender, receiver, recentMessage, chatId }) => (
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
                router.push(`/chat/${chatId}`, { scroll: false });
              })
            }
          />
        )
      )}
    </>
  );
}
