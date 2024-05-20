import Image from "next/image";
import Link from "next/link";
function CardPost() {
  return (
    <div className="w-3/10 m
    b-5 flex flex-col gap-5 max-md:w-full">
      <div className="flex">
        <div className="relative h-[400px] w-[90%]">
          <Image className="cover" src="/rain.jpg" alt="" fill></Image>
        </div>
        <span className="m-auto -rotate-90">01.02.2024</span>
      </div>
      <div className="flex w-full flex-col justify-between">
        <h1 className="text-2xl font-extrabold">Title</h1>
        <p>Desc</p>
        <Link href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
}

export default CardPost;
