"use server";

import { revalidatePath } from "next/cache";
import { PrivateChat } from "../schema";

//* starting a conversation means just adding a new document to the 'private-chats' collection
//* here, receiver refers to the one with whom you are intitiating a chat
export async function startConversation({
  sender,
  receiver,
  message,
}: {
  sender: string;
  receiver: string;
  message: string;
}) {
  try {
    // const response = await PrivateChat.create({
    //   sender,
    //   receiver,
    //   messages: [{ content: message, sentAt: new Date().getTime() }],
    // });
    const response = await PrivateChat.findOneAndUpdate(
      {
        $or: [
          {
            $and: [{ sender }, { receiver }],
          },
          { $and: [{ sender: receiver, receiver: sender }] },
        ],
      },
      {
        $set: {
          sender,
          receiver,
        },
        $push: { messages: { content: message, sentAt: new Date().getTime() } },
      },
      { upsert: true, new: true }
    );
    // console.log("INSIDE INITIATING THE CONVERSATION", response);
    revalidatePath("/chat/");
    return response;
  } catch (err) {
    console.error(err);
  }
}
