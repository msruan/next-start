"use server";

import { Button } from "@/components/ui/button";
import { handleLogout } from "@/lib/actions";

export async function Logout() {
  return (
    <form action={handleLogout}>
      <Button className="cursor-pointer bg-white p-3 font-semibold text-black  hover:border-red-200 hover:text-white">
        Logout
      </Button>
    </form>
  );
}

export default Logout;
