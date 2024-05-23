import { useState } from "react";
import Link from "next/link";
import { Session } from "next-auth";

import { Button } from "@/components/ui/button";
import { handleLogout } from "@/lib/actions";
import { Bars3Icon } from "@heroicons/react/24/solid";

import NavLink from "./navLink/NavLink";

const links: { path: string; title: string }[] = [
  { path: "/", title: "Homepage" },
  { path: "/about", title: "About" },
  { path: "/blog", title: "Blog" },
  { path: "/contact", title: "Contact" },
];

function ContentLinks({
  session,
  isAdmin,
}: {
  session: Session | null;
  isAdmin: boolean;
}) {
  const
  return (
    <>
      {links.map((link) => (
        <NavLink key={link.title} item={link}></NavLink>
      ))}
      {session?.user ? (
        <>
          {isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
          <form action={handleLogout}>
            <Button className="cursor-pointer bg-white p-3 font-semibold text-black  hover:border-red-200 hover:text-white">
              Logout
            </Button>
          </form>
        </>
      ) : (
        <NavLink item={{ path: "/login", title: "Login" }} />
      )}
    </>
  );
}
function Links({
  className,
  session,
}: {
  className: string;
  session: Session | null;
}) {
  const isAdmin = true;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <div
        className={
          className +
          " " +
          "flex items-center justify-between p-2  max-md:hidden "
        }
      >
        <ContentLinks session={session} isAdmin={isAdmin}></ContentLinks>
      </div>

      <div
        className={
          className + " " + "flex items-center justify-end p-2 md:hidden "
        }
      >
        <Bars3Icon
          onClick={() => {
            setMenuIsOpen((prev) => !prev);
          }}
          className="h-6 w-6 cursor-pointer"
        />
        {menuIsOpen && (
          <div className="absolute right-0 top-[100px] flex h-burger min-h-48 w-1/2 flex-col items-center justify-center border-l-2 border-l-black bg-slate-900 text-center">
            <div className="flex h-burger-div w-full flex-col items-center justify-between">
              <ContentLinks session={session} isAdmin={isAdmin}></ContentLinks>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Links;
