"use server";

import { unstable_noStore as noStore } from "next/cache";

import axiosInstance from "@/config/axiosConfig";
import { IPost, Post } from "@/models/post";
import { IUser, User } from "@/models/user";

import { signIn, signOut } from "./auth";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  const data =  awaxiosInstance.get("/api/blog");
  return (await data).data;
};

export const getPost = async (slug: string) => {
  noStore();
  try {
    connectToDb();
    const post: IPost | null = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id: string) => {
  noStore();
  try {
    connectToDb();
    const user: IUser | null = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  noStore();
  try {
    connectToDb();
    const users: IUser[] = await User.find();
    return users;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};

export async function handleGithubLogin() {
  "use server";
  await signIn("github");
}

export async function handleLogout() {
  "use server";
  await signOut();
}
