import { Button } from "@/components/ui/button";
import { handleGithubLogin } from "@/lib/actions";
import { auth, signIn } from "@/lib/auth";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

async function LoginPage() {
  const session = await auth()
  console.log();
  
  return (
    <form action={handleGithubLogin}>
      <Button>
        Login com Github <GitHubLogoIcon />
      </Button>
    </form>
  );
}

export default LoginPage;
