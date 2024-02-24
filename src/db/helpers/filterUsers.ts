"use server";
import { connectDB } from "../connect";
import { IUser, User } from "../schema";

export default async function searchUsers(
  searchString: string
): Promise<IUser[]> {
  connectDB();

  const users = await User.find({
    $text: {
      $search: `\\${searchString}\\`,
      $caseSensitive: false,
    },
  })
    .select({ _id: 0 })
    .lean();

  console.log(`the search string is ${searchString} and the data is`);
  console.log(users);

  return users as IUser[];
}
