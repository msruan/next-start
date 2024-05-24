import Image from "next/image";
import Link from "next/link";
import lodash from "lodash.truncate";

import { IPost } from "@/models/post";

import { AspectRatio } from "../ui/aspect-ratio";
function CardPost({ post }: { post: IPost }) {
  return (
    <div className="mb-5 flex w-3/10 flex-col gap-5 max-md:w-full">
      <div className="flex">
        {/* <div className="relative h-[400px] w-[90%]"> */}
        <AspectRatio ratio={16 / 17}>
          <Image
            className="cover"
            src={post?.img || "/rain.jpg"}
            alt=""
            fill
          ></Image>
        </AspectRatio>
        {/* </div> */}
        <span className="m-auto  -rotate-90 text-xs">01.02.2024</span>
      </div>
      <div className="flex w-full flex-col justify-between">
        <h1 className="w-9/10 text-2xl font-extrabold capitalize">
          {post.title}
        </h1>
        <p className="w-9/10 text-justify text-gray-500">
          {lodash(post.desc, {
            length: 215,
            separator: /,? +/,
            omission: "...", // Add '...' at the end of the truncated string
          })}
        </p>
        <Link href={`/blog/${post.slug}`} className="underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default CardPost;
