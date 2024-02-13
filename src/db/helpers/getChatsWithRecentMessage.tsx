"use server";
import { connectDB } from "../connect";
import { PrivateChat } from "../schema";

export default async function getChatsWithRecentMessage(user: string) {
  await connectDB();
  const result = await PrivateChat.aggregate([
    { $match: { $or: [{ sender: user }, { receiver: user }] } },
    {
      $addFields: {
        recentMessage: { $arrayElemAt: ["$messages.content", -1] },
      },
    },
    {
      $project: {
        _id: 0,
        _v: 0,
        messages: 0,
      },
    },
  ]);
  console.log("These are the sidebar chats");
  console.log(result);
  return result;
}
