import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="bg-purple-600 xl:b min-h-screen">{children}</div>;
}

export default Container;
