import { FC } from "react";
import Image from "next/image";

import { PostUser } from "@/components/postUser/PostUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axiosInstance from "@/config/axiosConfig";
import { getPost } from "@/lib/data";
import { IPost } from "@/models/post";

//USING API
// const getPost = async (id: string) => {
//   const response = await axiosInstance.get(`/posts/${id}`);
//   const post: IPost = response.data;
//   return post;
// };

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
        <Image
          src={post?.img ?? "/rain.jpg"}
          alt=""
          fill
          className="object-cover"
        ></Image>
      </figure>
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-extrabold capitalize">{post?.title}</h1>
        <div className="flex w-full gap-4 text-sm">
          {post?.userId && <PostUser userId={post?.userId}></PostUser>}
          <div className="flex flex-col">
            <span className="text-gray-400">Date</span>
            <p>{post?.createdAt.toDateString().slice()}</p>
          </div>
        </div>
        <p className="text-lg">{post?.desc}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
