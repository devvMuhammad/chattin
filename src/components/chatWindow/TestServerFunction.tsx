"use server";

import { connectDB } from "@/app/db/connect";
import { PrivateChat, PublicChat } from "@/app/db/schema";

export async function createPrivateChat() {
  await connectDB();
  const response = await PrivateChat.create({
    sender: "kotak",
    receiver: "panir",
    messages: [{ content: "waya kana jani", sentAt: new Date().getTime() }],
  });
  // console.log(response);
}

export async function sendPrivateMessage() {
  await connectDB();
  const response = await PrivateChat.updateOne(
    { sender: "kotak" },
    {
      $push: {
        messages: { content: "sare sha", sentAt: new Date().getTime() },
      },
    }
  );
  // console.log(response);
}

export async function sendPublicMessage() {
  await connectDB();
  const response = await PublicChat.create({
    sender: "Gul Majid",
    content: "gul majid khabari kom",
    sentAt: new Date().getTime(),
  });
}
