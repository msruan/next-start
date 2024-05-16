import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className=" flex min-h-screen flex-col justify-between bg-purple-600 pr-12 xl:w-384 xl:pl-12 m-autoss">
      {children}
    </div>
  );
}

export default Container;
