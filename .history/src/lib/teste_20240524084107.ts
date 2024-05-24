import { signOut } from "./auth";

export async function handleLogout() {
  "use server";
  await signOut();
}
