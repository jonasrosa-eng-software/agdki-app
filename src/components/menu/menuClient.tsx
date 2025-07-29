import { useState } from 'react'
import { MenuActions } from '@/pages/private/actions/actionsMenu'
import { ListButtons } from '../listButtons/listButtons'
import { BlackActions, IActionsProps } from '@/types/IActionsModel'
import { ListActionsClient } from '../listActionsClient/listActionsClient'

interface IMenuProps {
  action: IActionsProps
  title: string
  isClient?: boolean
}

const MenuClient = (props: IMenuProps) => {
  const { action, title, isClient = false } = props
  const [actions, setActions] = useState<IActionsProps>(BlackActions)
  return (
    <div className="mb-4 flex h-full w-full flex-col gap-1">
      <ListActionsClient
        action={action}
        isClient={isClient}
        title={title}
        onSetActions={setActions}
      />
      <ListButtons action={action} title={'Menu'} onSetActions={setActions} />
      {actions.action && (
        <MenuActions
          actKey={actions.actKey}
          actLabel={actions.actLabel}
          action={actions.action}
          onExecuted={() => {
            setActions(BlackActions)
          }}
        />
      )}
    </div>
  )
}

export { MenuClient }
