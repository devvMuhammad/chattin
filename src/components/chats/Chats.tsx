import { Input } from "@/components/ui/input";
import { AvatarFallback, Avatar } from "@/components/ui/avatar";
import { SearchIcon } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import ThemeButton from "./ThemeButton";

export default function Chats() {
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
          <Card className="p-2 grid items-center gap-x-2 grid-cols-[auto_1fr] border-zinc-700">
            <Avatar className="h-14 w-14 text-3xl">
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold">Shahbaz</h1>
              <p className="max-w-[250px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
                oeeee guys kuch mangwana?
              </p>
            </div>
          </Card>
          <Card className="p-2 grid items-center gap-x-2 grid-cols-[auto_1fr] border-zinc-700">
            <Avatar className="h-14 w-14 text-3xl">
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold">Aqib Raza</h1>
              <p className="max-w-[250px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
                murshad despresson horaha hai
              </p>
            </div>
          </Card>
          <Card className="p-2 grid items-center gap-x-2 grid-cols-[auto_1fr] border-zinc-700">
            <Avatar className="h-14 w-14 text-3xl">
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold">Maaz Bin Aamir</h1>
              <p className="max-w-[250px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
                Oeee Pagal Insaaan
              </p>
            </div>
          </Card>
        </div>
      </div>
      <ThemeButton />
    </aside>
  );
}
