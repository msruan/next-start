import { Button } from "@/components/ui/button";
import { handleGithubLogin } from "@/lib/actions";
import { signIn } from "@/lib/auth";
import { GitHubLogoIcon } from "@radix-ui/react-icons";


function LoginPage() {
  return (
    <form action={handleGithubLogin}>
      <Button>
        Login com Github <GitHubLogoIcon />
      </Button>
    </form>
  );
}

export default LoginPage;
