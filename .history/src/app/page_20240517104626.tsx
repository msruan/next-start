import React from "react";
import Image from "next/image";

function HomePage() {
  return <Container />;
}

const Container = () => (
  <main className="flex h-full w-full p-3">
    <div className=" w-3/5">
      <h1 className="text-7xl font-exbold">Creative Thoughts Agency.</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        blanditiis adipisci minima reiciendis a autem assumenda dolore.
      </p>
      <div>Buttons</div>
      <div>Social Medias</div>
    </div>
    <div className="flex h-full w-2/5 flex-col justify-center">
      <figure className="relative h-4/5">
        <Image className="" src="/homepage.png" alt="" fill={true} />
      </figure>
    </div>
  </main>
);

export default HomePage;
