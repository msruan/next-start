import { Button } from "@/components/ui/button";
import { handleGithubLogin } from "@/lib/actions";
import { auth, signIn } from "@/lib/auth";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

async function LoginPage() {
  // const session = await auth();
  // console.log(session);

  return (
    <form action={handleGithubLogin}>
      <Button>
        Login com Github <GitHubLogoIcon />
      </Button>
    </form>
  );
}

import { ChangeEvent, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { Login } from "@/actions/AuthAction";
import { GetProfileByEmail } from "@/actions/ProfileAction";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Experimental_CssVarsProvider } from "@mui/material";
import { ReloadIcon } from "@radix-ui/react-icons";

export function LoginPage() {
  // const { status, mutate } = Login();
  const { Login, signed } = useAuth();

  const [isEntering, setIsEntering] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "ruan@gmail.com",
    password: "1234",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement> | null = null) => {
    if (e) {
      e.preventDefault();
    }
    localStorage.setItem("email", inputValues.email);
    // mutate(inputValues);
    Login(inputValues);
    setIsEntering(true);
  };

  if (signed) {
    return <Navigate to="/posts" />;
  }

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
    return inputValues.email !== "" && inputValues.password !== "";
  };

  return (
    <Card
      className="w-full max-w-md text-wrap"
      onKeyDown={(e: any) => {
        if (e.key === "Enter" && validarParametros()) onSubmit();
      }}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tighter">
          Entre por sua conta em risco
        </CardTitle>
        <CardDescription className="text-purple-300">
          Não possui conta ainda?{" "}
          <Link className="underline" to={"/signup"}>
            Criar nova conta
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <Label htmlFor="email">Login</Label>
          <Input
            defaultValue="ruan@gmail.com"
            id="email"
            placeholder="Digite seu e-mail ou nome de usuário"
            type="email"
            name="email"
            onChange={handleOnChange}
          ></Input>
        </div>
        <div>
          <Label htmlFor="senha">Senha</Label>
          <Input
            id="senha"
            defaultValue="1234"
            placeholder="Digite sua melhor senha"
            type="password"
            name="password"
            onChange={handleOnChange}
          ></Input>
        </div>

        {isEntering ? (
          <Button className="mt-2" disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Entrando...
          </Button>
        ) : (
          <Button className="mt-2" onClick={onSubmit}>
            Entrar
          </Button>
        )}
        <form action={handleGithubLogin}>
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
  );
}

export default LoginPage;
