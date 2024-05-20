import Image from "next/image";
import Link from "next/link";
function CardPost() {
  return (
    <div className="flex h-full w-1/3 flex-col">
      <div className="flex h-1/2 w-1/2">
        <div className="relative h-[400px] w-[90%]">
          <Image className="cover" src="/rain.jpg" alt="" fill></Image>
        </div>
        <span className="-rotate-90">01.02.2024</span>
      </div>
      <div className="flex h-1/2 w-full flex-col justify-between">
        <h1>Title</h1>
        <p>Desc</p>
        <Link href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
}

export default CardPost;
