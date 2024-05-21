import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axiosInstance from "@/config/axiosConfig";
import { IPost } from "@/models/post";

const getPost = async (id: string) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  const post: IPost = response.data;
  return post;
};

interface SinglePostParams {
  slug: string;
}

interface SinglePostPageProps {
  params: SinglePostParams;
}

const SinglePostPage: React.FC<SinglePostPageProps> = async ({ params }) => {
  const { slug } = params;
  console.log(slug);
  return (
    <div className="flex h-full w-full gap-20">
      <figure className="relative h-main w-full">
        <Image src="/rain.jpg" alt="" fill className="object-cover"></Image>
      </figure>
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-extrabold">Title</h1>
        <div className="flex w-full gap-4 text-sm">
          <Avatar>
            <AvatarImage asChild src="/rain.jpg">
              <Image src="/rain.jpg" alt="logo" width={50} height={50} />
            </AvatarImage>
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-gray-400">Author</span>
            <p>Name of Author</p>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Date</span>
            <p>01.01.2024</p>
          </div>
          <div></div>
        </div>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          corporis provident facere mollitia? Possimus vitae temporibus laborum
          perspiciatis voluptatibus! Assumenda a alias nihil veniam quis ipsum
          iste eius sapiente neque! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi mollitia odio nisi dolorum totam quas, quis
          voluptates quo voluptatibus reprehenderit voluptas, beatae similique
          tempore sint. Libero ullam placeat explicabo iusto.
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
