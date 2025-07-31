import { Button } from "@heroui/button";
import { ReactNode, useEffect, useState } from "react";
import { API } from "@/api/api";
import {
  ActionsItems,
  ActionsProps,
  IActionsProps,
} from "@/types/IActionsModel";
import { iconMap } from "../icons/iconMap";
import { ScrollShadow } from "@heroui/react";
import { ResponseModel } from "@/types/response";

type Icon = keyof typeof iconMap;

interface IListActionsProps {
  action: IActionsProps;
  title: string;
  onSetActions: (action: IActionsProps) => void;
}

const ListActions = (props: IListActionsProps) => {
  const { title, onSetActions } = props;
  const [actsItems, setActsItems] = useState<ActionsProps[]>([]);

  useEffect(() => {
    API.get<ResponseModel<ActionsItems>>("/acts", {
      params: {
        idParant: "ROOT_QDA_DIA_DIA",
      },
    }).then((response) => {
      if (!response) {
        return;
      }
      const { resp, status } = response.data;
      if (status) {
      }

      const tmpActs = resp.actsItems;

      setActsItems(tmpActs);
    });
  }, []);

  return (
    <div>
      <div className="m-2 flex h-8 w-full items-center justify-start">
        <h2 className="font text-primary-500">{title}</h2>
      </div>

      <ScrollShadow
        className="flex max-w-[300] items-start gap-2"
        hideScrollBar={true}
        orientation="horizontal"
      >
        {actsItems.map((item) => {
          return (
            <ActionItem
              key={item.actKey}
              action={item}
              onSetActions={onSetActions}
            />
          );
        })}
      </ScrollShadow>
    </div>
  );
};

interface IActionItemProps {
  action: ActionsProps;
  onSetActions: (action: IActionsProps) => void;
}

const ActionItem = (props: IActionItemProps) => {
  const { action, onSetActions } = props;

  const getIcons = (act: Icon): ReactNode => {
    return iconMap[act];
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Button
        className="circular z-0 flex h-20 w-10 flex-col items-center justify-center rounded-xl border-gray-300 bg-default-100"
        variant="ghost"
        onPress={() => {
          onSetActions({
            action: true,
            actKey: action.actKey,
            actLabel: action.actLabel,
          });
        }}
      >
        {getIcons(action.icon)}
        <p className="text-xs text-default-800">{action.actLabel}</p>
      </Button>
    </div>
  );
};

export { ListActions };
