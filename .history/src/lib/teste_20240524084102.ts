export async function handleLogout() {
  "use server";
  await signOut();
}
