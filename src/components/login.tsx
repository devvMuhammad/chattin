"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/chat/public" });
    } catch (error) {
      console.error("Something went wrong with your login.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Button onClick={loginWithGoogle}>
      {isLoading ? <div className="loading"></div> : "Login With Google"}
    </Button>
  );
}
