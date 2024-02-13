import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/icons";
import UserProfile from "./UserProfile";
import getChatsWithRecentMessage from "@/db/helpers/getChatsWithRecentMessage";
import RecentMessages from "./RecentMessages";
import { Suspense } from "react";
import RecentMessagesSkeleton from "./RecentMessagesSkeleton";

export const revalidate = 10;

// const dummyMessages = [
//   { sender: "Shahbaz", recentMessage: "guys bhuk lagi, kuch mangawana?" },
//   { sender: "Aqib Raza", recentMessage: "murshad despresson horaha" },
//   { sender: "Maaz Bin Aamir", recentMessage: "Oyeee Pagal insaan" },
// ];

export default async function SidebarChats() {
  // here, we will fetch the messages overview using a query function and display them
  const user = "Muhammad Amjad";
  const recentMessages = await getChatsWithRecentMessage(user);
  return (
    <aside className="pb-4 flex flex-col justify-between w-96 h-screen border-r dark:border-zinc-700">
      <div className="p-4 space-y-5">
        <h2 className="text-xl font-bold">Messages</h2>

        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <Input
            className="pl-8"
            placeholder="Start a conversation..."
            type="search"
          />
        </div>
        <Suspense fallback={<RecentMessagesSkeleton />}>
          <RecentMessages recentMessages={recentMessages} user={user} />
        </Suspense>
      </div>
      <UserProfile sender="Muhammad Amjad" text="muhammadajoufi@gmail.com" />
    </aside>
  );
}
