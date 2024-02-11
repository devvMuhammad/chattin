// export {GET,POST} from "@/auth";
//! CURRENTLY LEARNING THE v4 OF THE NEXT AUTH
import { connectDB } from "@/app/db/connect";
import { User } from "@/app/db/schema";
import { nanoid } from "nanoid";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      httpOptions: {
        timeout: 6000,
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // i want to include the id as an extra property, so first i need to check if the user is already registred, if not then create one
      connectDB();
      const user = (await User.findOne({ email: token.email })
        .select({ id: 1 })
        .lean()) as { id: string }; // !temporary jugar
      const userId = user?.id || "";
      // console.log(userId);
      // if not present, then generate a new one and save it to the database
      let newuserId;
      if (!userId) {
        newuserId = nanoid(15);
        // nano
        await User.create({
          name: token.name,
          email: token.email,
          id: newuserId,
        });
      }

      if (account) {
        // token.extraProperty = "da da zama da taraf na";
        token.userId = newuserId || userId;
      }
      return token;
    },
    session({ session, token }) {
      // session.user.extraProperty = token.extraProperty;
      session.user.userId = token.userId; //! will fix this
      return session;
    },
  },
});

export { handler as GET, handler as POST };
