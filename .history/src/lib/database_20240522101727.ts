import { Post } from "@/models/post";

export const getPosts = async () => {
    const posts :  = await Post.find();
};
