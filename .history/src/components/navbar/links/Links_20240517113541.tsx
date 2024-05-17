"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Bars3Icon } from "@heroicons/react/24/solid";

import NavLink from "./navLink/NavLink";

const links: { path: string; title: string }[] = [
  { path: "/", title: "Homepage" },
  { path: "/about", title: "About" },
  { path: "/blog", title: "Blog" },
  { path: "/contact", title: "Contact" },
];

function ContentLinks(){
  return <{links.map((link) => (
    <NavLink key={link.title} item={link}></NavLink>
  ))}
  {session ? (
    <>
      {isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
      <Button className="cursor-pointer bg-white p-3 font-semibold text-slate-900 hover:border-white hover:text-white">
        Logout
      </Button>
    </>
  ) : (
    <NavLink item={{ path: "/login", title: "Login" }} />
  )}>
  </>
}

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
          <div className="absolute right-0 top-[100px] flex h-burger min-h-48 w-1/2 flex-col items-center justify-between border-l-2 border-l-black bg-slate-900 text-center">
            <div className="flex h-burger-div w-full flex-col items-center justify-between">
              {links.map((link) => (
                <NavLink key={link.title} item={link}></NavLink>
              ))}

              {session ? (
                <>
                  {isAdmin && (
                    <NavLink item={{ path: "/admin", title: "Admin" }} />
                  )}
                  <Button className="cursor-pointer bg-white p-3 font-semibold text-slate-900 hover:border-white hover:text-white">
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink item={{ path: "/login", title: "Login" }} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Links;
