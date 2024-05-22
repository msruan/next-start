import Image from "next/image";
import Link from "next/link";
import lodash from "lodash.truncate"

import { IPost } from "@/models/post";
function CardPost({ post }: { post: IPost }) {
  
  return (
    <div className="max-xl:w- mb-5 flex w-3/10 flex-col gap-5 max-md:w-full">
      <div className="flex">
        <div className="relative h-[400px] w-[90%]">
          <Image className="cover" src="/rain.jpg" alt="" fill></Image>
        </div>
        <span className="m-auto  -rotate-90 text-xs">01.02.2024</span>
      </div>
      <div className="flex w-full flex-col justify-between">
        <h1 className="w-9/10 text-2xl font-extrabold capitalize">
          {post.title}
        </h1>
        <p className="w-9/10 text-gray-500">{lodash() post.desc}</p>
        <Link href={`/blog/${post.slug}`} className="underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default CardPost;
