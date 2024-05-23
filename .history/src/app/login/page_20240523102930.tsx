import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

async function handleLogin() {
  "use server";
  await signIn("github");
}
function LoginPage() {
  return (
    <form ac>
      <Button>
        Login com Github <GitHubLogoIcon />
      </Button>
    </form>
  );
}

export default LoginPage;
