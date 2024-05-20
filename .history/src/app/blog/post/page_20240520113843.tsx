import Image from "next/image";
function SinglePostPage() {
  return (
    <div className="flex">
      <div className="relative">
        <Image src="/rain.jpg" alt="" fill></Image>
      </div>
      <div>
        <h1></h1>
        <div>
          <Image src="/rain.jpg" alt="" width={35} height={35}></Image>
          <div>
            <p>Author</p>
            <p>Name of Author</p>
          </div>
          <div>
            <p>Date</p>
            <p>01.01.2024</p>
          </div>
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
