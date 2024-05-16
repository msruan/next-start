import Link from "next/link";

function NavBar() {
  return (
    <div className="w-full flex p-2">
      <div className="w-1/6">Logo</div>
      <div className="flex h-full w-5/6 justify-between bg-purple-400">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
