import Image from "next/image";
function CardPost() {
  return (
    <div>
      <div>
        <div className="relative">
            <Image src="" alt="" fill></Image>
        </div>
        <span>01.02.2024</span>
      </div>
      <div>
        <h1>Title</h1>
        <p>Desc</p>
        <footer></footer>
      </div>
    </div>
  );
}

export default CardPost;
