import Link from "next/link";

function NavBar() {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
