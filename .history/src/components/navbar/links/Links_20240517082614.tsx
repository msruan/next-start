"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Bars3Icon } from "@heroicons/react/24/solid";

import NavLink from "./navLink/NavLink";

const links: { path: string; title: string }[] = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/blog", title: "Blog" },
  { path: "/contact", title: "Contact" },
];

function Links({ className }: { className: string }) {
  const session = true;
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
        {links.map((link) => (
          <NavLink key={link.title} item={link}></NavLink>
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
            <Button className="cursor-pointer bg-white p-3 font-semibold text-slate-900">
              Logout
            </Button>
          </>
        ) : (
          <NavLink item={{ path: "/login", title: "Login" }} />
        )}
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
          <div className="absolute top-[100px] flex h-burger min-h-48 w-1/3 flex-col justify-between border-l-2 border-l-black text-center">
            <div className="flex h-1/4 flex-col justify-between">
              {links.map((link) => (
                <NavLink key={link.title} item={link}></NavLink>
              ))}
            </div>
            {session ? (
              <>
                {isAdmin && (
                  <NavLink item={{ path: "/admin", title: "Admin" }} />
                )}
                <Button className="cursor-pointer bg-white p-3 font-semibold text-slate-900">
                  Logout
                </Button>
              </>
            ) : (
              <NavLink item={{ path: "/login", title: "Login" }} />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Links;
