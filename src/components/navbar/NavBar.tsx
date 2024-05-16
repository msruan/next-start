import Links from "./links/Links";

function NavBar() {
  return (
    //Vou definir o w do lado de fora pra facilitar a responsividade
    <div className="flex h-[100px] w-full items-center">
      <div className="w-2/6 p-2 text-3xl font-extrabold">Logo</div>
      <Links className="w-4/6"></Links>
    </div>
  );
}

export default NavBar;
