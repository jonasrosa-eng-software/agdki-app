import {  useEffect, useState } from 'react'
import { API } from '@/api/api'
import { ActionsItems, ActionsProps, IActionsProps } from '@/types/IActionsModel'

import { Avatar, ScrollShadow } from '@heroui/react'
import { ResponseModel } from '@/types/response'
import logo from '@/assets/images/logo.png'

interface IListActionsProps {
  action: IActionsProps
  title: string
  isClient?: boolean
  onSetActions: (action: IActionsProps) => void
}

const ListActionsClient = (props: IListActionsProps) => {
  const { title, onSetActions, isClient } = props
  const [actsItems, setActsItems] = useState<ActionsProps[]>([])

  useEffect(() => {
    API.get<ResponseModel<ActionsItems>>('/acts', {
      params: {
        idParant: 'ROOT_QDA_DIA_DIA',
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
              isClient={isClient}
              onSetActions={onSetActions}
            />
          )
        })}
      </ScrollShadow>
    </div>
  )
}

interface IActionItemProps {
  action: ActionsProps
  onSetActions: (action: IActionsProps) => void
  isClient?: boolean
}

const ActionItem = (props: IActionItemProps) => {
  const { action, onSetActions } = props

  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-2 p-1">
      <Avatar
        isBordered
        className="cursor-pointer"
        size="lg"
        src={logo}
        onClick={() => {
          onSetActions({ action: true, actKey: action.actKey, actLabel: action.actLabel })
        }}
      />
      <p className="text-xs text-default-800">{action.actLabel}</p>
    </div>
  )
}

export { ListActionsClient }
