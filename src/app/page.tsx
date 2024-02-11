import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  if (session) redirect("/chat");
  else redirect("/login");
}
