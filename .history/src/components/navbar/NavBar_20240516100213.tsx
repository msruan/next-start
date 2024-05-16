import Link from "next/link";

function NavBar() {
  return (
    <div className="w-full flex">
      <div className="">Logo</div>
      <div className="flex justify-between bg-purple-400">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
