import { Avatar, AvatarFallback } from "../ui/avatar";

export default function PersonalMessages() {
  return (
    <>
      {/* FROM SOMEBODY ELSE */}
      <div className="flex items-end gap-2">
        <div className="flex flex-col gap-1">
          <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2">
            <p className="text-sm">Oeeee Pagal Insaan</p>
          </div>
          <p className="text-xs text-muted-foreground">8:57, 12 December</p>
        </div>
      </div>
      {/* FROM MYSELF */}
      <div className="flex items-end gap-2 justify-end text-right">
        <div className="flex flex-col gap-1">
          <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2">
            <p className="text-sm">Oeeee Pagal Insaan</p>
          </div>
          <p className="text-xs text-muted-foreground">8:57, 12 December</p>
        </div>
      </div>
    </>
  );
}
