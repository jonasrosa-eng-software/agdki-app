import { IActionsProps } from "@/types/IActionsModel";
import { Extrato } from "../extrato/extrato";
import { Menu } from "../menu/menu";
import { MenuClient } from "../menu/menuClient";

const Main = () => {
  const action: IActionsProps = { action: true, actKey: "", actLabel: "" };

  return (
    <div className="mt-14 flex h-full flex-col items-center justify-start gap-1">
      <div className="h-full w-full flex-col items-center justify-start gap-2">
        <Extrato />
        <Menu action={action} title="Dia a dia" />
      </div>
    </div>
  );
};

const MainClient = () => {
  const action: IActionsProps = { action: true, actKey: "", actLabel: "" };
  return (
    <div className="mt-14 flex h-full w-full flex-col items-center justify-start gap-1">
      <div className="max-w-max[400px] h-full w-full flex-col items-center justify-start gap-2">
        <Extrato />
        <MenuClient action={action} isClient={true} title="Meus agendamentos" />
      </div>
    </div>
  );
};
export { Main, MainClient };
