import LoginButton from "@/components/login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Component() {
  const session = await getServerSession();
  if (session) redirect("/chat/public");
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-full max-w-lg rounded-lg border-2 border-gray-800 p-8 text-white">
        <h1 className="text-3xl tracking-tight font-bold">Chattin</h1>
        <p>Sign in to connect with your peers!</p>
        {/* <p className="mt-2 mb-6">Choose your preferred sign in method</p> */}
        {/* <SocialLogins /> */}

        {/* <SigninForm />/ */}
        <LoginButton />
      </div>
    </div>
  );
}
