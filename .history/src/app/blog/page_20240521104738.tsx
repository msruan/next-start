import { AxiosPromise, AxiosResponse } from "axios";

import CardPost from "@/components/cardPost/cardPost";
import axiosInstance from "@/config/axiosConfig";
import { IPost } from "@/models/post";

async function getPosts(): Promise<IPost[]> {
  const response = await axiosInstance.get("/posts");
  const data : IPost[] = response.data;
  return data
}

async function BlogPage() {
  return (
    <div className="flex h-full w-full flex-wrap justify-between gap-5">
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
    </div>
  );
}

export default BlogPage;
