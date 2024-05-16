import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="bg-purple-600">{children}</div>;
}

export default Container;
