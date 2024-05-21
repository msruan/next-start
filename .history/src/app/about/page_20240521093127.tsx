import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex items-center">
      <div className="flex-basis-0 flex w-1/3 flex-shrink flex-grow flex-col justify-between">
        <h1 className="text-xl font-extrabold text-blue-600">About Agency</h1>
        <p className="text-5xl font-extrabold">
          We create digital ideas that are bigger, bolder, braver and better.
        </p>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision We are world&apos;s
          Our Special Team best consulting & finance solution provider. Wide
          range of web and software development services.
        </p>
        <div className="flex w-full justify-between ">
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-blue-600">10 K+</div>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-blue-600">234 K+</div>
            <p>People reached</p>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-blue-600">5 K+</div>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="flex-basis-0 relative flex-shrink flex-grow">
        <Image
          width={200}
          height={200}
          src="/about.svg"
          alt=""
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
}

export default AboutPage;
