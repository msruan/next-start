import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="bg-purp">{children}</div>;
}

export default Container;
