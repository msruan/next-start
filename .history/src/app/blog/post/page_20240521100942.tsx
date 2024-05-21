import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "" 
function SinglePostPage() {
  return (
    <div className="flex h-full w-full">
      <figure className="relative h-main w-3/10">
        <Image src="/rain.jpg" alt="" fill className="object-cover"></Image>
      </figure>
      <div>
        <h1 className="text-5xl font-extrabold">Title</h1>
        <div className="text-sm">
          <Avatar>
            <AvatarImage asChild src="/rain.jpg">
              <Image src="/rain.jpg" alt="logo" width={40} height={40} />
            </AvatarImage>
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <Image
            className="rounded-3xl object-cover"
            src="/rain.jpg"
            alt=""
            width={35}
            height={35}
          ></Image>
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
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          corporis provident facere mollitia? Possimus vitae temporibus laborum
          perspiciatis voluptatibus! Assumenda a alias nihil veniam quis ipsum
          iste eius sapiente neque!
        </p>
      </div>
    </div>
  );
}

export default SinglePostPage;
