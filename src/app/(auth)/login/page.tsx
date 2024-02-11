"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Component() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/chat" });
    } catch (error) {
      console.error("Something went wrong with your login.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-full max-w-lg rounded-lg border-2 border-gray-800 p-8 text-white">
        <h1 className="text-3xl tracking-tight font-bold">Chattin</h1>
        <p>Sign in to connect with your peers!</p>
        {/* <p className="mt-2 mb-6">Choose your preferred sign in method</p> */}
        {/* <SocialLogins /> */}

        {/* <SigninForm />/ */}
        <Button onClick={loginWithGoogle}>
          {isLoading ? <div className="loading"></div> : "Login With Google"}
        </Button>
      </div>
    </div>
  );
}
