import Link from "next/link";

function NavBar() {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href>Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
