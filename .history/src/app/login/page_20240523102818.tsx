import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auths";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

async function handleLogin(){
  "user server"
  signIn
}
function LoginPage() {
  return (
    <Button>
      Login com Github <GitHubLogoIcon />
    </Button>
  );
}

export default LoginPage;
