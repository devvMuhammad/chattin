import mongoose from "mongoose";

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

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
// const publicChatSchema = new mongoose.Schema();
