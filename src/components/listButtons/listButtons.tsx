import { Button } from '@heroui/button'
import { ReactNode, useEffect, useState } from 'react'
import { API } from '@/api/api'
import { ActionsItems, ActionsProps, IActionsProps } from '@/types/IActionsModel'
import { iconMap } from '../icons/iconMap'
import { ResponseModel } from '@/types/response'

type Icon = keyof typeof iconMap

interface IListActionsProps {
  action: IActionsProps
  title: string
  onSetActions: (action: IActionsProps) => void
}

const ListButtons = (props: IListActionsProps) => {
  const { title, onSetActions } = props
  const [actsItems, setActsItems] = useState<ActionsProps[]>([])

  useEffect(() => {
    API.get<ResponseModel<ActionsItems>>('/acts', {
      params: {
        idParant: 'ROOT_QDA_MENU',
      },
    }).then((response) => {
      if (!response) {
        return
      }
      const { resp, status } = response.data
      if (status) {
      }

      const tmpActs = resp.actsItems

      setActsItems(tmpActs)
    })
  }, [])

  return (
    <div className="flex w-full flex-col items-center justify-start">
      <div className="m-2 h-8 w-full pl-2">
        <h2 className="font text-primary-500">{title}</h2>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-2">
        {actsItems?.map((item) => {
          return <ActionItem key={item.actKey} action={item} onSetActions={onSetActions} />
        })}
      </div>
    </div>
  )
}

interface IActionItemProps {
  action: ActionsProps
  onSetActions: (action: IActionsProps) => void
}

const ActionItem = (props: IActionItemProps) => {
  const { action, onSetActions } = props

  const getIcons = (act: Icon): ReactNode => {
    return iconMap[act]
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <Button
        className="z-0 flex h-12 w-full flex-col items-center justify-center rounded-xl border-inherit bg-default-200"
        variant="ghost"
        onPress={() => {
          onSetActions({ action: true, actKey: action.actKey, actLabel: action.actLabel })
        }}
      >
        <div className="flex w-full items-center justify-between">
          <p className="text-xs text-default-800">{action.actLabel}</p>
          {getIcons(action.icon)}
        </div>
      </Button>
    </div>
  )
}

export { ListButtons }
