"use server";

import { connectDB } from "../connect";
import { User } from "../schema";

export default async function filterProducts(searchString: string) {
  connectDB();
  const users = await User.find({
    $text: {
      $search: searchString,
      $caseSensitive: false,
    },
  })
    .select({ _id: 0 })
    .lean();

  return users;
}
