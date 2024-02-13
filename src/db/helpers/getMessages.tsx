"use server";

import { connectDB } from "../connect";
import { PrivateChat, PublicChat } from "../schema";

export default async function getMessages({
  type,
  chatId,
  user,
}: {
  type: "private" | "public";
  chatId: string | null;
  user: string;
}) {
  connectDB();
  //! fetching public messages
  if (type === "public" || !chatId) {
    const result = await PublicChat.find();
    return { success: true, messages: result };
  }
  //! fetching private messages
  const result = await PrivateChat.findOne({
    $and: [{ $or: [{ receiver: user }, { sender: user }] }, { chatId }],
  });
  console.log(result);
  if (!result)
    return {
      success: false,
      message: "The chat you are looking for does not exist",
    };
  return { success: true, messages: result };
}
