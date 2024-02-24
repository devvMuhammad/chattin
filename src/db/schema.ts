import mongoose, { Document } from "mongoose";
import { nanoid } from "nanoid";

export interface IUser extends Document {
  name: string;
  email: string;
  id?: string;
}

const userSchema = new mongoose.Schema<IUser>({
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

export interface IPublicChat {
  sender: string;
  messageId?: string;
  content: string;
  sentAt: number;
}

const publicChatSchema = new mongoose.Schema<IPublicChat & Document>({
  sender: { type: String, required: true },
  messageId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(20),
  },
  content: { type: String, required: true },
  sentAt: {
    type: Number,
    required: true,
  },
});

export interface IPrivateChatMessage {
  messageId?: string;
  content: string;
  sentAt: number;
}

export interface IPrivateChat extends Document {
  chatId: string;
  sender: string;
  receiver: string;
  messages: IPrivateChatMessage[];
}

const privateChatSchema = new mongoose.Schema<IPrivateChat>(
  {
    chatId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(20),
    },
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
        sentAt: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

privateChatSchema.pre("save", function (next) {
  if (!this.chatId) {
    this.chatId = nanoid(20);
  }
  next();
});

export const User =
  mongoose.models?.User || mongoose.model<IUser>("User", userSchema);

export const PublicChat =
  mongoose.models?.PublicChat ||
  mongoose.model<IPublicChat>("PublicChat", publicChatSchema, "public-chat");

export const PrivateChat =
  mongoose.models?.PrivateChat ||
  mongoose.model<IPrivateChat>(
    "PrivateChat",
    privateChatSchema,
    "private-chat"
  );
