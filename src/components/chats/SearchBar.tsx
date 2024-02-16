"use client";

import { useEffect, useState, useTransition } from "react";
import { Input } from "../ui/input";
import useDebounce from "@/lib/useDebounce";
import searchUsers from "@/db/helpers/filterUsers";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

type User = {
  name: string;
  email: string;
  imageUrl?: string;
  userid?: string;
};

export default function SearchBar() {
  const [text, setText] = useState("");
  const [data, setData] = useState<User[] | null>();
  const [isPending, startTransition] = useTransition();
  const [searchPerformed, setSearchPerformed] = useState(false); // New state
  const debouncedText = useDebounce(text);

  useEffect(() => {
    if (debouncedText.length <= 0) {
      setData(null);
      setSearchPerformed(false);
      return;
    }
    async function fetchUsers() {
      try {
        const searchedUsers = await searchUsers(debouncedText);
        setData(searchedUsers);
        setSearchPerformed(true);
      } catch (err) {
        console.error(err);
      }
    }

    startTransition(fetchUsers);

    return () => {
      setData(null);
    };
  }, [debouncedText]);

  return (
    <>
      <h1>Search User</h1>
      <Input
        onChange={(e) => setText(e.target.value)}
        placeholder="Search a user to start a conversation..."
      />
      {isPending ? (
        <p className="text-red-500">Loading...</p>
      ) : (
        <>
          {searchPerformed && data && data.length > 0 ? (
            data.map((user) => (
              <Card
                key={user.userid}
                className="p-2 flex items-center gap-2 border-zinc-700 hover:bg-zinc-900 cursor-pointer"
              >
                <Avatar className="h-10 w-10 text-xl">
                  {/* <AvatarImage src={data?.user.image as string} /> */}
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="font-bold">{user.name}</h1>
                  <p className="max-w-[200px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
                    {user.email}
                  </p>
                </div>
              </Card>
            ))
          ) : searchPerformed ? (
            <p>No users found</p>
          ) : null}
        </>
      )}
    </>
  );
}
