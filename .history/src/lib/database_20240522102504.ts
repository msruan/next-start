import { Post } from "@/models/post";

export const getPosts = async () => {
    const posts : I = await Post.find();
    return posts;
};
