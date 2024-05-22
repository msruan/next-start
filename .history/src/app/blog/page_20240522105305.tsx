import { AxiosPromise, AxiosResponse } from "axios";

import CardPost from "@/components/cardPost/cardPost";
import axiosInstance from "@/config/axiosConfig";
import { getPosts } from "@/lib/data";
import { IPost } from "@/models/post";

//USING API
// async function getPosts(): Promise<IPost[]> {
//   const response = await axiosInstance.get("/posts");
//   const data: IPost[] = response.data;
//   return data;
// }

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
const teste = {
  username: "msruan",
  email: "ruan@gmail.com",
  name: "Ruan Macedo",
  password: "1234",
  avatar:
    "https://i.pinimg.com/736x/7a/44/cd/7a44cd27ea4185fade5ccae1fa0b15ce.jpg",
};

export default BlogPage;
