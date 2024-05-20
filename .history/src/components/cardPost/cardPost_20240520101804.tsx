import Image from "next/image";
import Link from "next/link";
function CardPost() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-1/2 w-1/2">
        <div className="relative h-[210px] w-[120px]">
          <Image src="/rain.jpg" alt="" fill></Image>
        </div>
        <span>01.02.2024</span>
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
