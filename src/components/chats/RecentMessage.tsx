"use client";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card } from "../ui/card";
import { RecentMessage } from "./RecentMessages";

export default function RecentMessage({
  name,
  recentMessage,
  chatId,
}: { name: string } & Omit<RecentMessage, "receiver" | "sender">) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/chat/${chatId}`)}
      className="p-2 flex gap-2 items-center border-zinc-700 hover:bg-zinc-900 cursor-pointer"
    >
      <Avatar className="h-14 w-14 text-3xl">
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="font-bold max-w-[250px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
          {name}
        </h1>
        <p className="max-w-[250px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
          {recentMessage}
        </p>
      </div>
    </Card>
  );
}
