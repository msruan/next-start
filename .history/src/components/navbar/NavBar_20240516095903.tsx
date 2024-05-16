import Link from "next/link";

function NavBar() {
  return (
    <div className="w-full">
      <div className="w-1">Logo</div>
      <div className="flex w-full justify-between bg-purple-400">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
