import Link from "next/link";

import Links from "./links/Links";

function NavBar() {
  return (
    //Vou definir o w do lado de fora pra facilitar a responsividade
    <div className="z-20 box-content flex min-h-[100px] w-full items-center">
      <Link href="/" className="w-2/3 p-2 text-3xl font-extrabold">
        Logo
      </Link>
      <Links className="w-1/3"></Links>
    </div>
  );
}

export default NavBar;
