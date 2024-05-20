import Image from "next/image";
function CardPost() {
  return (
    <div className="h-full w-full">
      <div className="">
        <div className="relative">
          <Image src="/rain.jpg" alt="" fill></Image>
        </div>
        <span>01.02.2024</span>
      </div>
      <div className="flex flex-col">
        <h1>Title</h1>
        <p>Desc</p>
        <footer>READ MORE</footer>
      </div>
    </div>
  );
}

export default CardPost;
