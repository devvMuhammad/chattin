"use server";

import { connectDB } from "@/db/connect";
import { PrivateChat, PublicChat } from "@/db/schema";

export async function createPrivateChat() {
  await connectDB();
  const response = await PrivateChat.create({
    sender: "Muhammad Amjad",
    receiver: "Sher Afzal",
    messages: [
      { content: "Hey there, what is up?", sentAt: new Date().getTime() },
    ],
  });
  console.log(response);
}

export async function sendPrivateMessage() {
  await connectDB();
  const response = await PrivateChat.updateOne(
    { sender: "Muhammad Amjad" },
    {
      $push: {
        messages: {
          content: "za rawaan yum alaka",
          sentAt: new Date().getTime(),
        },
      },
    }
  );
  // console.log(response);
}

export async function sendPublicMessage() {
  await connectDB();
  const response = await PublicChat.create({
    sender: "Muhammad Amjad",
    content: "Yo man, what is goin on?",
    sentAt: new Date().getTime(),
  });
}
