import { IPost, Post } from "@/models/post";

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
      } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
      }
  const posts: IPost[] = await Post.find();
  return posts;
};
