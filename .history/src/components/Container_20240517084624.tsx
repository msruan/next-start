import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="relative m-auto flex min-h-screen flex-col justify-between pr-12 xl:w-384 xl:pl-12 2xl:max-w-2xl 2xl ">
      {children}
    </div>
  );
}

export default Container;
