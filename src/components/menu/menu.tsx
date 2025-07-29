import { useState } from 'react'
import { ListActions } from '../listActions/listActions'
import { MenuActions } from '@/pages/private/actions/actionsMenu'
import { ListButtons } from '../listButtons/listButtons'
import { BlackActions, IActionsProps } from '@/types/IActionsModel'

interface IMenuProps {
  action: IActionsProps
  title: string
}

const Menu = (props: IMenuProps) => {
  const { action, title } = props
  const [actions, setActions] = useState<IActionsProps>(BlackActions)
  return (
    <div className="mb-4 flex h-full w-full flex-col gap-1">
      <ListActions action={action} title={title} onSetActions={setActions} />
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

export { Menu }
