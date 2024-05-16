import Link from "next/link";

function NavBar() {
  return (
    <div className="w-full flex">
      <div className="w-1/6 p-2">Logo</div>
      <div className="flex w-5/6 justify-between p-2 bg-purple-400">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
