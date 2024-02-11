import type { User, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & { userId: string };
  }
}
