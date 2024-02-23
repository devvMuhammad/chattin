"use client";

import { useEffect, useState, useTransition } from "react";
import { Input } from "../ui/input";
import useDebounce from "@/lib/useDebounce";
import searchUsers from "@/db/helpers/filterUsers";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { IUser } from "@/db/schema";
import { Button } from "../ui/button";
import StartConversation from "./StartConversation";

// type User = {
//   name: string;
//   email: string;
//   imageUrl?: string;
//   id?: string;
// };

export default function SearchBar() {
  const [text, setText] = useState("");
  const [data, setData] = useState<IUser[] | null>();
  const [isPending, startTransition] = useTransition();
  const [searchPerformed, setSearchPerformed] = useState(false); // New state
  const [selectedPerson, setSelectedPerson] = useState<{
    id: string;
    name: string;
  } | null>();
  const debouncedText = useDebounce(text);

  useEffect(() => {
    setSelectedPerson(null);
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
  console.log(selectedPerson);
  return (
    <>
      <h1 className="text-base md:text-xl">Search User</h1>
      <Input
        onChange={(e) => setText(e.target.value)}
        placeholder="Search a user to start a conversation..."
      />
      <div className="max-h-[250px] md:max-h-[400px] overflow-y-auto space-y-2">
        {isPending ? (
          <p className="text-red-500">Loading...</p>
        ) : (
          <>
            {searchPerformed && data && data.length > 0 ? (
              data.map((user) => (
                <Card
                  onClick={() =>
                    setSelectedPerson({
                      id: user.id as string,
                      name: user.name as string,
                    })
                  }
                  key={user.id}
                  className={`p-2 flex items-center gap-2 border-zinc-700 ${
                    user.id === selectedPerson?.id && "bg-zinc-800"
                  } hover:bg-zinc-800 cursor-pointer`}
                >
                  <Avatar className="h-10 w-10 text-xl">
                    {/* <AvatarImage src={data?.user.image as string} /> */}
                    <AvatarFallback className="border border-white">
                      {user.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="font-bold">{user.name}</h1>
                    <p className="max-w-[250px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
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
      </div>
      {selectedPerson && (
        <StartConversation name={selectedPerson.name} id={selectedPerson.id} />
      )}
    </>
  );
}
