import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div key="1" className="flex h-screen">
      <aside className="w-80 border-r dark:border-zinc-700">
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Messages</h2>
            <Button size="icon" variant="ghost">
              <PencilIcon className="w-6 h-6" />
            </Button>
          </div>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            <Input
              className="pl-8"
              placeholder="Search messages..."
              type="search"
            />
            {/* <Button
              className="absolute right-2.5 top-3"
              size="icon"
              variant="ghost"
            /> */}
          </div>
          <div className="space-y-2">
            <Card className="p-2">
              <CardContent>
                <h3 className="font-semibold">Contact Name</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Last message...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>
      <section className="flex flex-col w-full">
        <header className="border-b dark:border-zinc-700 p-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Avatar className="relative overflow-visible w-10 h-10">
              <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
              <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              Contact Name
              <span className="text-xs text-green-600 block">Online</span>
            </div>
          </h2>
        </header>
        <main className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            <div className="flex items-end gap-2">
              <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2">
                <p className="text-sm">Hello, how are you?</p>
              </div>
            </div>
            <div className="flex items-end gap-2 justify-end">
              <div className="rounded-lg bg-blue-500 text-white p-2">
                <p className="text-sm">I'm fine, thanks for asking!</p>
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
    </div>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
