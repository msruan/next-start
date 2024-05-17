import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

function HomePage() {
  return <Container />;
}

const Container = () => (
  <main className="flex gap- h-full w-full p-3">
    <div className="flex w-1/2 flex-col gap-24">
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
        <Button variant={"destructive"}>Learn more</Button>
        <Button variant={"destructive"}>Contact</Button>
      </div>
      <div>Social Medias</div>
    </div>
    <div className="flex h-full w-1/2 flex-col justify-center">
      <figure className="relative z-10 h-full">
        <Image className="z-10" src="/homepage.png" alt="" fill={true} />
      </figure>
    </div>
  </main>
);

export default HomePage;
