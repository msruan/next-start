import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { handleGithubLogin } from "@/lib/actions";
import { auth, signIn } from "@/lib/auth";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ReloadIcon } from "@radix-ui/react-icons";

export function LoginPage() {
  // const [isEntering, setIsEntering] = useState(false);
  // const [inputValues, setInputValues] = useState({
  // email: "ruan@gmail.com",
  // password: "1234",
  // });

  // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setInputValues({ ...inputValues, [name]: value });
  // };
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement> | null = null) => {
    if (e) {
      e.preventDefault();
    }
    // localStorage.setItem("email", inputValues.email);
    // setIsEntering(true);
  };

  // if (status === "success") {
  // const email = inputValues.email;
  // console.log(email);
  // const { handleChange } = useAuth();
  // const { response: data, isSuccess } = GetProfileByEmail(email);
  // if (isSuccess) {
  //   handleChange({ username: data?.username, id: data?.id });
  // }
  // console.log("LOGIN COM SUCESSO");
  // return <Navigate to="/posts" />;
  // }

  const validarParametros = (): boolean => {
    // return inputValues.email !== "" && inputValues.password !== "";
    return true;
  };

  return (
    <div className="flex items-center justify-center">
      <Card
        className="w-full max-w-md text-wrap"
        // onKeyDown={(e: any) => {
        // if (e.key === "Enter" && validarParametros()) onSubmit();
        // }}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tighter">
            Entre por sua conta em risco
          </CardTitle>
          <CardDescription className="text-purple-300">
            Não possui conta ainda?{" "}
            <Link className="underline" href={"/signup"}>
              Criar nova conta
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Label htmlFor="nome">First name</Label>
            <Input
              placeholder="Type your first name"
              type="text"
              name="first_name"
              onChange={handleOnChange}
            ></Input>
          </div>
          <div>
            <Label htmlFor="nome">Last name</Label>
            <Input
              placeholder="Type your last name"
              type="text"
              name="last_name"
              onChange={handleOnChange}
            ></Input>
          </div>
          <div>
            {/**Todo: partir depois pra pegar o first name */}
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Type your username"
              type="text"
              name="username"
            ></Input>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Type your best email"
              type="email"
              name="email"
              onChange={handleOnChange}
            ></Input>
          </div>
          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              placeholder="Type your most discreet password"
              type="password"
              name="password"
              onChange={handleOnChange}
            ></Input>
          </div>
          <div>
            <Label htmlFor="confirm-senha">Senha</Label>
            <Input
              id="confirm-senha"
              placeholder="Retype your password"
              type="password"
              name="confirm_password"
              onChange={handleOnChange}
            ></Input>
          </div>
          {/* 
        {isEntering ? (
          <Button className="mt-2" disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Entrando...
          </Button>
        ) : ( */}
          <Button className="mt-2">
            {" "}
            {/*onClick={onSubmit}> */}
            Entrar
          </Button>
          {/* )} */}
          <form
            className="flex flex-col items-center"
            action={handleGithubLogin}
          >
            <div className="mt-2 flex items-center justify-center gap-6">
              <Separator></Separator>
              <span className="text-xs text-muted-foreground">OU</span>
              <Separator></Separator>
            </div>
            <Button variant="outline" className="mt-2">
              <GitHubLogoIcon className="mr-2" />
              Entrar com o GitHub
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-wrapp text-center text-sm text-muted-foreground">
            Ao entrar em nossa plataforma, você concorda que roubemos todos os
            seus dados.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;