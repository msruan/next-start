import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/actions";

function HomePage() {
  return <Container />;
}

const Container = async () => {
  const session = (await getSession())
  console.log(first)
  return (
    <main className="flex h-full w-full gap-24 p-3">
      <div className="flex flex-1 flex-col justify-center gap-12">
        <h1 className="text-wrap text-8xl font-extrabold">
          <p>Creative</p>
          <p>Thoughts</p>
          <p>Agency.</p>
        </h1>
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-5">
          <Button className="bg-blue-600 p-6">Learn more</Button>
          <Button className="bg-white p-6 text-black">Contact</Button>
        </div>
        <div className="relative h-[50px] w-full max-w-[500px] grayscale">
          <Image src="/brands.png" alt="" fill={true}></Image>
        </div>
      </div>
      <figure className="relative z-10 flex h-main w-1/2 flex-col justify-center">
        <Image
          className="z-10 object-cover"
          src="/homepage.png"
          alt=""
          fill={true}
        />
      </figure>
    </main>
  );
};

export default HomePage;
