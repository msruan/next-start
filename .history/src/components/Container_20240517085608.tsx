import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="sm:w-xs md:w-sm lg:w-md xl:w-lg 2xl:w-xl relative m-auto flex min-h-screen w-full flex-col justify-between  2xl:max-w-2xl ">
      {children}6
    </div>
  );
}

export default Container;
s