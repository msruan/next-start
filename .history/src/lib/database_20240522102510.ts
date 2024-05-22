import { IPost, Post } from "@/models/post";

export const getPosts = async () => {
  const posts: IPost[] = await Post.find();
  return posts;
};
