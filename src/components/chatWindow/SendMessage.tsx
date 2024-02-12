"use client";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { SmileIcon } from "../ui/icons";
import { Input } from "../ui/input";
import { PrivateChat, User } from "@/app/db/schema";
import { connectDB } from "@/app/db/connect";
import {
  createPrivateChat,
  sendPrivateMessage,
  sendPublicMessage,
} from "./TestServerFunction";

export default function SendMessage() {
  const [message, setMessage] = useState("");
  /**
   TESTING
   - making a private chat
   - sending a public message
   - sending a private message
   */
  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // if (!message) return;
    try {
      // sendPrivateMessage();
      // createPrivateChat();
      sendPublicMessage();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form className="flex items-center gap-2" onSubmit={submitHandler}>
      <Button size="icon" variant="ghost">
        <SmileIcon className="w-6 h-6" />
      </Button>
      <Input
        className="flex-1"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Send</Button>
    </form>
  );
}
