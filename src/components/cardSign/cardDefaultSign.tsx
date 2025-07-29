import { ReactNode } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import logoLight from "@/assets/images/logo_blue2.png";
import { ArronLeft } from "../icons/arrowLeft";
interface ICardDefaultSignProps {
  title: string;
  children: ReactNode;
  isSignIn: boolean;
  onSubmit?: () => void;
  onCancel?: () => void;
}
export const CardDefaultSign = (props: ICardDefaultSignProps) => {
  const { title, children, isSignIn, onCancel, onSubmit } = props;
  return (
    <Card className="flex h-full w-full max-w-screen-sm gap-4 p-2">
      <CardHeader className="flex h-auto flex-col items-center gap-4">
        <div className="flex w-full justify-start">
          <ArronLeft color="#006FEE" onClick={onCancel} />
        </div>
        <Image className="w-[200px]" src={logoLight} />

        <div className="text-center text-default-900">
          <h2>{title}</h2>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col justify-start">{children}</CardBody>
      <CardFooter className="flex flex-col justify-evenly">
        {isSignIn ? (
          <>
            <Button
              className="w-full uppercase"
              color="primary"
              onPress={onSubmit}
            >
              Entrar
            </Button>
            <Button
              className="w-full"
              color="secondary"
              variant="light"
              onPress={onCancel}
            >
              Esqueceu a senha?
            </Button>
          </>
        ) : (
          <>
            <Button
              className="w-full uppercase"
              color="primary"
              variant="ghost"
              onPress={onSubmit}
            >
              Cadastar
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
