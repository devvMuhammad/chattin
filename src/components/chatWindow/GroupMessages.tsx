import { Avatar, AvatarFallback } from "../ui/avatar";

export default function GroupMessages() {
  return (
    <>
      {/* FROM SOMEBODY ELSE */}
      <div className="flex items-end gap-2">
        <div className="flex gap-2 items-center">
          <Avatar className="h-10 w-10 ">
            <AvatarFallback className="bg-yellow-500">S</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-[18px]">Muhammad Amjad</p>
            <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2">
              <p className="text-sm">Oeeee Pagal Insaan</p>
            </div>
            <p className="text-xs text-muted-foreground">8:57, 12 December</p>
          </div>
        </div>
      </div>
      {/* MESSAGE IN GROUP FROM ME, THE JUSTIFY END IS RESPONSIBLE FOR SHOWING THE MESSAGE AT RIGHT */}
      <div className="flex items-end gap-2 justify-end text-right">
        <div className="flex flex-row-reverse gap-2 items-center">
          <Avatar className="h-10 w-10 ">
            <AvatarFallback className="bg-yellow-500">S</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-[18px]">Muhammad Amjad</p>
            <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2">
              <p className="text-sm">Oeeee Pagal Insaan</p>
            </div>
            <p className="text-xs text-muted-foreground">8:57, 12 December</p>
          </div>
        </div>
      </div>
      {/* FROM MYSE */}
    </>
  );
}
