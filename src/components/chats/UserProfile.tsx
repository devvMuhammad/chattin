import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export default function UserProfile({
  sender,
  text,
}: {
  sender: string;
  text: string;
}) {
  return (
    <div className="flex justify-center">
      <Card className="p-2 flex items-center gap-2 border-zinc-700 hover:bg-zinc-900 cursor-pointer">
        <Avatar className="h-10 w-10 text-xl">
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold">{sender}</h1>
          <p className="max-w-[200px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
            {text}
          </p>
        </div>
        <Button variant="ghost">
          <LogOutIcon />
        </Button>
      </Card>
    </div>
  );
}
