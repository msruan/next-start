import { FC } from "react";
import Image from "next/image";

import PostUser from "@/components/postUser/PostUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axiosInstance from "@/config/axiosConfig";
import { IPost } from "@/models/post";

const getPost = async (id: string) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  const post: IPost = response.data;
  return post;
};

interface SinglePostPageProps {
  params: {
    slug: string;
  };
}

const SinglePostPage: FC<SinglePostPageProps> = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className="flex h-full w-full gap-20">
      <figure className="relative h-main w-full">
        <Image src="/rain.jpg" alt="" fill className="object-cover"></Image>
      </figure>
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-extrabold capitalize">{post.title}</h1>
        <PostUser userId={id}></PostUser>
        <p className="text-lg">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
