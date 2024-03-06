"use client";
import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { useTestAuthContext } from "../test-auth";

export default function UserProfile({
  sender,
  text,
}: {
  sender: string;
  text: string;
}) {
  // const { data } = useSession();
  const { user } = useTestAuthContext();
  return (
    <div className="flex justify-center">
      <Card className="p-2 flex items-center gap-2 border-zinc-700 hover:bg-zinc-900 cursor-pointer">
        <Avatar className="h-10 w-10 text-xl">
          {/* <AvatarImage src={data?.user.image as string} /> */}
          {/* <AvatarFallback>{(data?.user.name as string)[0]}</AvatarFallback> */}
        </Avatar>
        <div>
          <h1 className="font-bold">{user}</h1>
          <p className="max-w-[200px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
            {/* {data?.user.email} */}
            {user}@gmai.com
          </p>
        </div>
        {/* <Button variant="ghost" onClick={() => signOut({ callbackUrl: "/" })}> */}
        <Button variant="ghost">
          <LogOutIcon />
        </Button>
      </Card>
    </div>
  );
}
