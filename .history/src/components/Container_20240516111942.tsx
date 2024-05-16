import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-purple-600 m-auto xl:w-384 xl:pl-12 pr-12 min-h-screen flex flex-col">
      {children}
    </div>
  );
}

export default Container;
