import { IPost, Post } from "@/models/post";

import { connectToDb } from "./utils";

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
      const post: IUser | null = await User.findOne(id);
      return post;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch post!");
    }
  };
