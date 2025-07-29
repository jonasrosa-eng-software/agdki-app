import React, { ReactElement, Suspense, useEffect, useState } from 'react'
import { addToast } from '@heroui/react'
import { ModeOptionsStatus } from '@/enum/commom'

const TurmaFormEdit = React.lazy(() => import('../form/turmaEdit'))

interface IAction {
  keyRequired?: boolean
  element: ReactElement
}

export interface IActionsProps {
  actKey: string
  actLabel: string
  action: boolean
  onExecuted: () => void
  onDismissed: () => void
  focus: string
}

const renderActions = (props: IActionsProps): IAction => {
  const { actKey, onExecuted, onDismissed } = props
  const actions = new Map()
  //action icons
  actions.set('TUR_CREATE', {
    keyRequired: false,
    element: (
      <TurmaFormEdit
        active
        mode={ModeOptionsStatus.CREATE}
        onDismissed={onDismissed}
        onExecuted={onExecuted}
      />
    ),
  })

  actions.set('TUR_EDIT', {
    keyRequired: true,
    element: (
      <TurmaFormEdit
        active
        mode={ModeOptionsStatus.UPDATE}
        onDismissed={onDismissed}
        onExecuted={onExecuted}
      />
    ),
  })

  //   actions.set('TUR_DELETE', {
  //     keyRequired: true,
  //     element: <TurmaFormEdit {...props} />,
  //   })

  return actions.get(actKey)
}

const TurmasActions = (props: IActionsProps) => {
  const [element, setElement] = useState<JSX.Element | null>()
  const { onExecuted, actLabel } = props

  useEffect(() => {
    const rst = renderActions(props)

    if (!rst) {
      addToast({
        title: `${actLabel}`,
        description: `Ação não encontrada`,
        color: 'warning',
      })
      onExecuted()
      return
    }

    setElement(rst.element)
  }, [])

  return <Suspense fallback={null}>{element}</Suspense>
}

export { TurmasActions }
