function AboutPage() {
  return (
    <div className="flex h-full items-center">
      <div className="flex h-2/3 w-1/3 flex-col justify-between">
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
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-blue-600">10 K+</div>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-blue-600">10 K+</div>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-blue-600">10 K+</div>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div> </div>
    </div>
  );
}

export default AboutPage;
