"use server";

import { connectDB } from "@/app/db/connect";
import { PrivateChat } from "@/app/db/schema";

export async function createPrivateChat() {
  await connectDB();
  const response = await PrivateChat.create({
    sender: "kotak",
    receiver: "panir",
    messages: [{ content: "waya kana jani", timestamp: new Date().getTime() }],
  });
  console.log(response);
}

export async function sendPrivateMessage() {
  await connectDB();
  const response = await PrivateChat.updateOne(
    { sender: "kotak" },
    {
      $push: {
        messages: { content: "sare sha", timestamp: new Date().getTime() },
      },
    }
  );
  console.log(response);
}
