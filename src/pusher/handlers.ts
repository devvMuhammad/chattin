"use server";

import { IPrivateChatMessage, IPublicChat } from "@/db/schema";
import { pusherServer as pusher } from "./server";

type sendMessageProps =
  | { chatType: "public"; message: IPublicChat }
  | { chatType: "private"; chatId: string; message: IPrivateChatMessage };

//! CHAT APP WORKFLOW
/* workflow of chat app 
- server emits a message to a channel
- user subscribes to that channel
- user updates the ui accordingly
 */

/*
  sending a message
  - user call the sendMessage button
  - show the message immediately as loading
  - sender updates apna khud ka message ui
  - the server broadcasts the message to the other users via the 'message' event
  
  receiving the message
  - make a useffect that subscribes to the public channel and listens the 'message' event
  - when a message comes, the ui of the messages is updated
*/

export async function sendMessage(args: sendMessageProps) {
  try {
    //* for public message
    const { chatType, message } = args;
    if (chatType === "public") {
      pusher.trigger("public", "message", message);
      return;
    }
    //* for private message
    const { chatId } = args;
    console.log(
      "CHAT ID INSIDE THE PUSHER HANDLER",
      chatType === "private" && `private_${chatId}`
    );
    pusher.trigger(`private_${chatId}`, "message-private", message);
    return "message sent successfully";
    // return {success:true,message:"Private message sent"}
  } catch (err) {
    console.error(err);
  }
}
