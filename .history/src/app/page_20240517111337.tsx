import React from "react";
import Image from "next/image";

function HomePage() {
  return <Container />;
}

const Container = () => (
  <main className="flex h-full w-full p-3">
    <div className=" w-3/5">
      <h1 className="text-wrap text-7xl font-extrabold">
        <p>Creative</p>
        <p>Thoughts</p>
        <p>Agency.</p>
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        blanditiis adipisci minima reiciendis a autem assumenda dolore.
      </p>
      <div>

        
      </div>
      <div>Social Medias</div>
    </div>
    <div className="flex h-full w-2/5 flex-col justify-center">
      <figure className="relative z-10 h-4/5">
        <Image className="z-10" src="/homepage.png" alt="" fill={true} />
      </figure>
    </div>
  </main>
);

export default HomePage;
