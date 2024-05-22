"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ILink } from "@/models/link";

function NavLink({ item }: { item: ILink }) {
  const pathName = usePathname();
  const isActive = pathName === item.path;
  return (
    <Link
      className={`${isActive && "rounded-3xl bg-white  p-2  text-black"}`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
