import { Post } from "@/models/post";

export const getPosts = async () => {
    const posts = Post.find();
};
