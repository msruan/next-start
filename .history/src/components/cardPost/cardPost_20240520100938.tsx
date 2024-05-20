import Image from "next/image";
import Link from "next/link";
function CardPost() {
  return (
    <div className="h-full w-full">
      <div className="flex h-1/2 w-1/2">
        <div className="relative h-full w-1/2">
          <Image src="/rain.jpg" alt="" fill></Image>
        </div>
        <span>01.02.2024</span>
      </div>
      <div className="flex h-1/2 w-full flex-col justify-between">
        <h1>Title</h1>
        <p>Desc</p>
        <Link href="/">READ MORE</Link>
      </div>
    </div>
  );
}

export default CardPost;
