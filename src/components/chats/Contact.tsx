import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card } from "../ui/card";

export default function Contact({
  sender,
  text,
}: {
  sender: string;
  text: string;
}) {
  return (
    <Card className="p-2 grid items-center gap-x-2 grid-cols-[auto_1fr] border-zinc-700 hover:bg-zinc-900 cursor-pointer">
      <Avatar className="h-14 w-14 text-3xl">
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="font-bold">{sender}</h1>
        <p className="max-w-[250px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
          {text}
        </p>
      </div>
    </Card>
  );
}
