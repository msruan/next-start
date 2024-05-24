import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { User } from "@/models/user";

import { connectToDb } from "./utils";
import mongoose from "mongoose";
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
        await connectToDb();
        if (account?.provider === "github") {
          try {
            const user = User.findOne({ email: profile?.email });
            if (!user) {
              const newUser : mongoose.Model<any, {}, {}, {}, any, any> = new User({
                name: profile?.name,
                username: profile?.login,
                email: profile?.email,
                avatar: profile?.avatar_url,
              });
              await newUser.save;
            }
          } catch (error) {
            console.log(error);
            return false;
          }
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
