import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="bg-re">{children}</div>;
}

export default Container;
