import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen pr-12 m-auto bg-purple-600 xl:w-384 xl:pl-12">
      {children}
    </div>
  );
}

export default Container;
