import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ChatName({ name }: { name: string }) {
  return (
    <header className="border-b dark:border-zinc-700 p-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Avatar className="relative overflow-visible w-10 h-10">
          <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
          <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div>
          {name}
          <span className="text-xs text-green-600 block">Online</span>
        </div>
      </h2>
    </header>
  );
}
