import React from "react";
import Image from "next/image";

function HomePage() {
  return <Container />;
}

const Container = () => (
  <main className="flex h-full w-full bg-pink-700 p-3">
    <div className=" w-3/4">
      <h1>Creative Thoughts Agency.</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        blanditiis adipisci minima reiciendis a autem assumenda dolore.
      </p>
      <div>Buttons</div>
      <div>Social Medias</div>
    </div>
    <div className="flex h-full w-full h-1/2 w-1/4 flex-col">
      <figure className="relative ">
        <Image className="" src="/homepage.png" alt="" fill={true} />
      </figure>
    </div>
  </main>
);

export default HomePage;
