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
