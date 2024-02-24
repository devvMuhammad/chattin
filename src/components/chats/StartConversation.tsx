"use client";
import { FormEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { startConversation } from "@/db/helpers/startConversation";
import { useSession } from "next-auth/react";

export default function StartConversation({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(inputRef.current?.value);
    if (!inputRef.current?.value.length) return;
    setLoading(true);
    try {
      const message = inputRef.current?.value as string;
      const response = await startConversation({
        sender: session?.user.name as string,
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
