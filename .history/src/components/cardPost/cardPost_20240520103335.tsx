import Image from "next/image";
import Link from "next/link";
function CardPost() {
  return (
    <div className="flex h-full w-1/4 flex-col">
      <div className="flex w-full justify-between">
        <div className="relative h-[400px] w-[90%]">
          <Image className="cover" src="/rain.jpg" alt="" fill></Image>
        </div>
        <span className="-rotate-90">01.02.2024</span>
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
