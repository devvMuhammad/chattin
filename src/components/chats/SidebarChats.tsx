import UserProfile from "./UserProfile";
import getChatsWithRecentMessage from "@/db/helpers/getChatsWithRecentMessage";
import RecentMessages from "./RecentMessages";
import { Suspense } from "react";
import RecentMessagesSkeleton from "./RecentMessagesSkeleton";
import SearchUsers from "./SearchUsers";
import { IPublicChat } from "@/db/schema";

// export const revalidate = 300;

export default async function SidebarChats() {
  // here, we will fetch the messages overview using a query function and display them
  const user = "Muhammad Amjad";
  const [recentPublicMessage, recentPrivateMessages] =
    (await getChatsWithRecentMessage(user)) as [IPublicChat, any[]];
  return (
    <aside className="pb-4 flex flex-col justify-between w-96 h-screen border-r dark:border-zinc-700">
      <div className="grid grid-rows-[auto_auto_1fr] p-4 space-y-5">
        <h2 className="text-xl font-bold">Messages</h2>
        <SearchUsers />
        <Suspense fallback={<RecentMessagesSkeleton />}>
          <div className="max-h-[62vh] space-y-3 overflow-y-auto overflow-x-hidden">
            <RecentMessages
              publicLastMessageSender={recentPublicMessage.sender}
              publicLastMessage={recentPublicMessage.content}
              initialRecentMessages={recentPrivateMessages}
              user={user}
            />
          </div>
        </Suspense>
      </div>
      <UserProfile sender="Muhammad Amjad" text="muhammadajoufi@gmail.com" />
    </aside>
  );
}
