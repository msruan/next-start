import { Post } from "@/models/post";

export const getPosts = async () => {
    const posts : IPO = await Post.find();
    return posts;
};
