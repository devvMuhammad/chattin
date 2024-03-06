"use client";
import { useTestAuthContext } from "../test-auth";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Message } from "./ChatMessages";
// import { PublicMessage } from "./GroupMessages";

export default function MessageComponent({
  sender,
  content,
  sentAt,
  type,
  messagePending,
}: // sentBySelf,
// messagePending,
Message & { type: "public" | "private" } & { messagePending: boolean }) {
  //! justify-end text-right
  //! be sure to add this class in order to show content at the right
  //! in the public message, only the avatar will not be shown
  //! to identify private/public, there is no private

  //* test user, in actual, you will get this from the next-auth-session provider
  const { user } = useTestAuthContext();
  return (
    <div
      className={`flex items-end gap-2 ${
        sender === user && "justify-end text-right"
      }`}
    >
      <div className="flex gap-2 items-center">
        {type === "public" && (
          <Avatar className="h-10 w-10 ">
            <AvatarFallback className="bg-yellow-500">S</AvatarFallback>
          </Avatar>
        )}
        <div className={"flex flex-col gap-1"}>
          <p className="text-[18px]">{sender}</p>
          <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2">
            <p className={`text-sm  ${messagePending && "bg-red-500"}`}>
              {content}
            </p>
          </div>
          <p className="text-xs text-muted-foreground">{sentAt}</p>
        </div>
      </div>
    </div>
  );
}
