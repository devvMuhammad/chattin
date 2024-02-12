import mongoose from "mongoose";
import { nanoid } from "nanoid";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  id: {
    type: String,
    unique: true,
    required: true,
  },
});

const publicChatSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  messageId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(20),
  },
  content: { type: String, required: true },
  // timesta
  sentAt: {
    type: Number,
    required: true,
  },
});

const privateChatSchema = new mongoose.Schema({
  chatId: { type: String, unique: true },
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  messages: [
    {
      messageId: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(20),
      },
      content: { type: String, required: true },
      //! must be provided by the client
      sentAt: {
        type: Number,
        required: true,
      },
    },
  ],
});

//! saving the id for the chatId
privateChatSchema.pre("save", function (next) {
  if (!this.chatId) {
    this.chatId = nanoid(20);
  }
  next();
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);

export const PublicChat =
  mongoose.models?.PublicChat ||
  mongoose.model("PublicChat", publicChatSchema, "public-chat");

export const PrivateChat =
  mongoose.models?.PrivateChat ||
  mongoose.model("PrivateChat", privateChatSchema, "private-chat");
