import CardPost from "@/components/cardPost/cardPost";
import axiosInstance from "@/config/axiosConfig";
import { IPost } from "@/models/post";
import { AxiosResponse } from "axios";

async function getPosts() : AxiosPromise<any, any> {
  const response = await axiosInstance.get("/posts");
  return response.data;
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
