import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth((req) => {
  if (req) {
    console.log(req); // do something with the request
  }
  return {
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        connectToDb
        if(account?.provider === 'github'){

        }
        console.log("User:");
        console.table(user);
        console.log("Account:");
        console.table(account);
        console.log("Profile:");
        console.table(profile);
        return true;
      },
    },
  };
});
