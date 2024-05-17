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
        <ContentLinks session={session} isAdmin={isAdmin} />
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
        <ContentLinks session={session} isAdmin={isAdmin} />
      </div>
    </>
  );
}

export default Links;
