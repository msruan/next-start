import { IPost, Post } from "@/models/post";

import { connectToDb } from "./utils";
import { IUser, User } from "@/models/user";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts: IPost[] = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDb();
    const post: IPost | null = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id: string) => {
    try {
      connectToDb();
      const user: IUser | null = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch post!");
    }
  };
