import Image from "next/image";
function CardPost() {
  return (
    <div className="h-full w-full">
      <div className="h-1/2 w-1/2">
        <div className="relative h-full w-1/2">
          <Image src="/rain.jpg" alt="" fill></Image>
        </div>
        <span>01.02.2024</span>
      </div>
      <div className="flex h-full w-full flex-col justify-center">
        <h1>Title</h1>
        <p>Desc</p>
        <footer>READ MORE</footer>
      </div>
    </div>
  );
}

export default CardPost;
