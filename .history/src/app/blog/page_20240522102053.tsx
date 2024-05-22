import { AxiosPromise, AxiosResponse } from "axios";

import CardPost from "@/components/cardPost/cardPost";
import axiosInstance from "@/config/axiosConfig";
import { IPost } from "@/models/post";

async function getPosts(): Promise<IPost[]> {
  const response = await axiosInstance.get("/posts");
  const data: IPost[] = response.data;
  return data;
}

async function BlogPage() {<div className="flex w-full gap-4 text-sm">
<Avatar>
  <AvatarImage asChild src="/rain.jpg">
    <Image src="/rain.jpg" alt="logo" width={50} height={50} />
  </AvatarImage>
  <AvatarFallback>N</AvatarFallback>
</Avatar>
<div className="flex flex-col">
  <span className="text-gray-400">Author</span>
  <PostUser userId={post.userId}></PostUser>
</div>
<div className="flex flex-col">
  <span className="text-gray-400">Date</span>
  <p>01.01.2024</p>
</div>
</div>
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
