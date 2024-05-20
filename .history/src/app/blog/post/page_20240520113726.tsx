import Image from "next/image";
function SinglePostPage() {
  return (
    <div>
      <div className="relative">
        <Image src="/rain.jpg" alt="" fill></Image>
      </div>
      <div>
        <h1></h1>
        <div>
          <Image src="/rain.jpg" alt="" width={35} height={35}></Image>
          <div>Author</div>
          <div></div>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          corporis provident facere mollitia? Possimus vitae temporibus laborum
          perspiciatis voluptatibus! Assumenda a alias nihil veniam quis ipsum
          iste eius sapiente neque!
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
