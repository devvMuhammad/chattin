import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  // const session = await getServerSession();
  // else redirect("/login");
  redirect("/chat/public");
}
