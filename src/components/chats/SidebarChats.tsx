import { Input } from "@/components/ui/input";
import { AvatarFallback, Avatar } from "@/components/ui/avatar";
import { SearchIcon } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import ThemeButton from "./ThemeButton";
import Contact from "./Contact";
import UserProfile from "./UserProfile";

export default function SidebarChats() {
  return (
    <aside className="pb-4 flex flex-col justify-between w-96 h-screen border-r dark:border-zinc-700">
      <div className="p-4 space-y-5">
        {/* <div className="flex justify-between items-center"> */}
        <h2 className="text-xl font-bold">Messages</h2>

        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <Input
            className="pl-8"
            placeholder="Start a conversation..."
            type="search"
          />
        </div>
        <div className="space-y-2">
          <Contact sender="Shahbaz" text="guys bhuk lagi, kuch mangawana?" />
          <Contact sender="Aqib Raza" text="murshad despresson horaha" />
          <Contact sender="Maaz" text="oeee pagal insaan" />
        </div>
      </div>
      <UserProfile sender="Muhammad Amjad" text="muhammadajoufi@gmail.com" />
    </aside>
  );
}
