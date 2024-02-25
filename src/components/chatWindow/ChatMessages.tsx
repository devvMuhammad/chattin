"use client";
import { useState, FormEvent, useEffect, useRef } from "react";
import MessageComponent from "./Message";
import { Button } from "../ui/button";
import { SmileIcon } from "../ui/icons";
import { Input } from "../ui/input";
import SendMessage from "./SendMessage";
import { pusherClient as pusher } from "@/pusher/client";
import { sendMessage } from "@/pusher/handlers";
import { useTestAuthContext } from "../test-auth";
import { set } from "mongoose";
import { Channel } from "pusher-js";

export type Message = {
  sender: string;
  receiver?: string; // present in private but not in public
  content: string;
  messageId?: string;
  sentAt: string;
  pendingId?: number;
};

export default function ChatMessages({
  initialMessages,
  chatId,
}: {
  initialMessages: Message[];
  chatId: string;
}) {
  //! test user, in actual, you will get this from the next-auth-session provider
  const chatType = chatId === "public" ? "public" : "private";
  const { user } = useTestAuthContext();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [pendingMessages, setPendingMessages] = useState<Message[]>([]);
  // const [messagePending, setMessagePending] = useState(false);
  // function send){
  // const messages = initialMessages;
  // }
  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const addMessageToPending = (message: Message) => {
    setPendingMessages([...pendingMessages, message]);
  };

  const formSendMessageHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
    // add the message to the pending list
    addMessageToPending({
      content: input,
      // sender: "Muhammad Amjad",
      sender: user,
      sentAt: `${new Date().getTime()}`,
    });
    try {
      if (chatType === "public") {
        await sendMessage({
          chatType: "public",
          message: {
            content: input,
            sender: user,
            sentAt: new Date().getTime(),
          },
        });
      } else {
        sendMessage({
          chatType: "private",
          chatId: chatId,
          message: {
            content: input,
            sentAt: new Date().getTime(),
            sender: user,
          },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  function messageEventHandler(message: Message) {
    console.log(`listening to the private message in private_${chatId}`);
    if (message.sender === user) {
      //* when the message is sent to yourself, keep removing the last pending ones, they will be at the start of the array
      setPendingMessages((prev) => {
        let copy = [...prev];
        copy.shift();
        return copy;
      });
      addMessage(message);
      return;
    } else {
      addMessage(message);
    }
  }

  useEffect(() => {
    const channelName = chatId === "public" ? "public" : `private_${chatId}`;
    console.log(channelName, chatId);
    let channel: Channel;
    if (chatId === "public") {
      channel = pusher.subscribe("public");
      channel.bind("message", messageEventHandler);
    } else {
      channel = pusher.subscribe("private_" + chatId);
      channel.bind("message-private", messageEventHandler);
    }
    return () => {
      pusher.unsubscribe(channelName);
      channel.unbind("message");
      channel.unbind("message-private");
    };
  }, [user, chatId]);

  return (
    <>
      <main className="flex-1 overflow-auto p-4">
        {/* {!result.success ? (
          <h1 className="text-3xl font-bold ">{result?.message}</h1>
        ) : ( */}
        <div className="space-y-4">
          {messages.map(({ sender, content, sentAt, messageId }) => (
            <MessageComponent
              key={messageId}
              messageId={messageId}
              sender={sender}
              content={content}
              sentAt={sentAt}
              type={chatId === "public" ? "public" : "private"}
              // sentBySelf={sentBySelf}
              messagePending={false}
            />
          ))}
          {pendingMessages.map(({ sender, content, sentAt, pendingId }) => (
            <MessageComponent
              key={pendingId}
              sender={sender}
              content={content}
              sentAt={sentAt}
              type={chatId === "public" ? "public" : "private"}
              messagePending={true}
            />
          ))}
        </div>
        {/* )} */}
      </main>
      <footer className="border-t dark:border-zinc-700 p-4">
        {/* <SendMessage /> */}
        <form
          className="flex items-center gap-2"
          onSubmit={formSendMessageHandler}
        >
          <Button size="icon" variant="ghost">
            <SmileIcon className="w-6 h-6" />
          </Button>
          <Input
            className="flex-1"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </form>
      </footer>
    </>
  );
}
