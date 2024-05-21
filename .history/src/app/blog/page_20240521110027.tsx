import { AxiosPromise, AxiosResponse } from "axios";

import CardPost from "@/components/cardPost/cardPost";
import axiosInstance from "@/config/axiosConfig";
import { IPost } from "@/models/post";

async function getPosts(): Promise<IPost[]> {
  const response = await axiosInstance.get("/posts", {headers: {'Cache-Control'}});
  const data: IPost[] = response.data;
  return data;
}

async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="flex h-full w-full flex-wrap justify-between gap-5">
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogPage;
