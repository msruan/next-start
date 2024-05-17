import React from "react";
import Image from "next/image";

function HomePage() {
  return <Container />;
}

const Container = () => (
  <div className="flex h-bur w-full bg-pink-700">
    <div className=" w-3/4">
      <h1>Creative Thoughts Agency.</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        blanditiis adipisci minima reiciendis a autem assumenda dolore.
      </p>
      <div>Buttons</div>
      <div>Social Medias</div>
    </div>
    <div className="relative w-1/4">
      <Image src="" alt="" fill={true} />
    </div>
  </div>
);

export default HomePage;
