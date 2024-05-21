import Image from "next/image";
function SinglePostPage() {
  return (
    <div className="flex h-full w-full">
      <div className="relative h-[400px] w-1/3">
        <Image src="/rain.jpg" alt="" fill></Image>
      </div>
      <div>
        <h1 className="text-5xl font-extrabold">Title</h1>
        <div>
          <figure className="relative h-main w-2/5">
            <Image src="/rain.jpg" alt="" fill className="object-cover"></Image>
          </figure>
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
