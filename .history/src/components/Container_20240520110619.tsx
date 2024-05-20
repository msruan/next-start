import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="relative m-auto flex h-full w-2xl  flex-col justify-between max-2xl:w-xl max-xl:w-lg max-lg:w-md max-md:w-sm max-sm:w-full">
      {children}
    </div>
  );
}

export default Container;
