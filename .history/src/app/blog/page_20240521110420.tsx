import { AxiosPromise, AxiosResponse } from "axios";

import CardPost from "@/components/cardPost/cardPost";
import axiosInstance from "@/config/axiosConfig";
import { IPost } from "@/models/post";

async function getPosts(): Promise<IPost[]> {
  const response = await fetch("/posts", {
    headers: { "Cache-Control": "no-storage" },
  });
  // const data: IPost[] = response.data;
  return response.json();
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
