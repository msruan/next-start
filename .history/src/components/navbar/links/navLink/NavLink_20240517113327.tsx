"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LinkSchema } from "@/models/link";

function NavLink({ item }: { item: LinkSchema }) {
  const pathName = usePathname();
  const isActive = pathName === item.path;
  return (
    <Link
      className={`${isActive && "rounded-xl bg-white  p-2  text-black"}`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
