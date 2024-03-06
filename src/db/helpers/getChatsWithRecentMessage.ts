"use server";
import { connectDB } from "../connect";
import {
  IPrivateChatMessage,
  IPublicChat,
  PrivateChat,
  PublicChat,
} from "../schema";

export type RecentMessage = {
  sender: string;
  receiver: string;
  chatId: string;
  recentMessage: string;
};

export default async function getChatsWithRecentMessage(user: string) {
  await connectDB();
  // try {
  const privateRecentMessagesPromise = PrivateChat.aggregate([
    { $match: { $or: [{ sender: user }, { receiver: user }] } },
    {
      $addFields: {
        recentMessage: { $arrayElemAt: ["$messages.content", -1] },
      },
    },
    { $sort: { createdAt: 1 } },
    {
      $project: {
        _id: 0,
        __v: 0,
        messages: 0,
      },
    },
  ]);
  const recentPublicMessagePromise = PublicChat.find().sort({ sentAt: "desc" });
  const [[recentPublicMessage], recentPrivateMessages] = await Promise.all([
    recentPublicMessagePromise,
    privateRecentMessagesPromise,
  ]);
  console.log([recentPublicMessage, recentPrivateMessages]);
  return [recentPublicMessage, recentPrivateMessages] as const;
  // } catch (err) {
  //   console.error(err);
  // }
}
