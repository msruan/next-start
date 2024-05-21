import { IPost } from "@/models/post";
import Image from "next/image";
import Link from "next/link";
function CardPost({post} : {post: IPost}) {
  return (
    <div className="w-3/10 max-xl:w- mb-5 flex flex-col gap-5 max-md:w-full">
      <div className="flex">
        <div className="relative h-[400px] w-[90%]">
          <Image className="cover" src="/rain.jpg" alt="" fill></Image>
        </div>
        <span className="m-auto  -rotate-90 text-xs">01.02.2024</span>
      </div>
      <div className="flex w-full flex-col justify-between">
        <h1 className="w-9/10 text-2xl font-extrabold">Title</h1>
        <p className="w-9/10 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          temporibus officia blanditiis tenetur nesciunt, ipsam facilis
          asperiores expedita obcaecati sequi nihil ducimus exercitationem ipsa?
          Veritatis dolorem excepturi libero fugit error?
        </p>
        <Link href="/blog/post" className="underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default CardPost;
