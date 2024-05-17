import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="relative m-auto flex min-h-screen flex-col justify-between max-sm:w-xs xl:w-384 xl:pl-12 xl:pr-12 2xl:w-full 2xl:max-w-2xl ">
      {children}
    </div>
  );
}

export default Container;
