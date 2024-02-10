import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { SmileIcon } from "@/components/ui/icons";

export default function ChatWindow() {
  return (
    <section className="flex flex-col w-full">
      <header className="border-b dark:border-zinc-700 p-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Avatar className="relative overflow-visible w-10 h-10">
            <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
            <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            Maaz Bin Aamir
            <span className="text-xs text-green-600 block">Online</span>
          </div>
        </h2>
      </header>
      <main className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          <div className="flex items-end gap-2">
            <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2">
              <p className="text-sm">Oeeee Pagal Insaan</p>
            </div>
          </div>
          <div className="flex items-end gap-2 justify-end">
            <div className="rounded-lg bg-blue-500 text-white p-2">
              <p className="text-sm">What Happened Bro?</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t dark:border-zinc-700 p-4">
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <SmileIcon className="w-6 h-6" />
          </Button>
          <Input className="flex-1" placeholder="Type a message..." />
          <Button>Send</Button>
        </div>
      </footer>
    </section>
  );
}
