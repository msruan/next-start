import Link from "next/link";

import Links from "./links/Links";
import { auth } from "@/lib/auth";

async function NavBar() {
  const signed = await auth();
  return (
    <div className="z-20 box-content flex min-h-[100px] w-full items-center">
      {/*Vou definir o w do lado de fora pra facilitar a responsividade*/}
      <Link href="/" className="w-3/5 p-2 text-3xl font-extrabold">
        Logo
      </Link>
      <Links className="w-2/5"></Links>
    </div>
  );
}

export default NavBar;
