import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import mongoose, { HydratedDocument } from "mongoose";

import { IUser, User } from "@/models/user";

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
        console.log("to acontecendo...");
        await connectToDb();
        if (account?.provider === "github") {
          try {
            const user = User.findOne({ email: profile?.email });
            console.log("oie entrei no try")
            if (!user) {
              console.log("nao achei users...")
              const newUser: HydratedDocument<IUser> = new User({
                name: profile?.name,
                username: profile?.login,
                email: profile?.email,
                avatar: profile?.avatar_url,
              });
              await newUser.save();
            }

          } catch (error) {
            console.log(error);
            return false;
          }
        }
        return true;
      },
    },
  };
});
