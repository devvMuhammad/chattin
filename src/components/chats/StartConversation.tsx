"use client";
import { FormEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { startConversation as startConversationAction } from "@/db/helpers/startConversation";
import { useSession } from "next-auth/react";
import { useTestAuthContext } from "../test-auth";

export default function StartConversation({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  //! UPDATE THEM LATER
  // const { data: session } = useSession();
  const { user } = useTestAuthContext();
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(inputRef.current?.value);
    if (!inputRef.current?.value.length) return;
    setLoading(true);
    try {
      const message = inputRef.current?.value as string;
      const response = await startConversationAction({
        // sender: session?.user.name as string,
        sender: user,
        receiver: name,
        message,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input ref={inputRef} placeholder={`Start a conversation with ${name}`} />
      <Button disabled={loading} type="submit">
        {loading ? "Loading ..." : "Submit"}
      </Button>
    </form>
  );
}
