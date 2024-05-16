import Link from "next/link";

function NavBar() {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="">About</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
