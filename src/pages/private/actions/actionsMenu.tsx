import React, { ReactElement, Suspense, useEffect, useState } from 'react'
import { addToast } from '@heroui/react'
import Reserva from '../module/reserva'
import Cadastro from '../module/cadastro'
import Escolinha from '../module/escolinha/escolinha'
import Estoque from '../module/estoque'
import Funcionarios from '../module/funcionarios'
import Financeiro from '../module/financeiro'
import Relatorio from '../module/relatorio'
import Suporte from '../module/suporte'
import Configuracao from '../module/configuracao'

const Agenda = React.lazy(() => import('@/pages/private/module/agenda'))

interface IAction {
  keyRequired?: boolean
  element: ReactElement
}

export interface IActionsProps {
  actKey: string
  actLabel: string
  action: boolean
  onExecuted: () => void
}

const renderSignActions = (props: IActionsProps): IAction => {
  const { actKey, onExecuted } = props
  const actions = new Map()
  //action icons
  actions.set('AGD', {
    keyRequired: false,
    element: <Agenda {...props} onExecuted={onExecuted} />,
  })
  actions.set('RSE', {
    keyRequired: false,
    element: <Reserva {...props} onExecuted={onExecuted} />,
  })
  actions.set('CAD', {
    keyRequired: false,
    element: <Cadastro {...props} onExecuted={onExecuted} />,
  })
  actions.set('ESC', {
    keyRequired: false,
    element: <Escolinha {...props} onExecuted={onExecuted} />,
  })
  actions.set('ETQ', {
    keyRequired: false,
    element: <Estoque {...props} onExecuted={onExecuted} />,
  })

  //buttons
  actions.set('FUN', {
    keyRequired: false,
    element: <Funcionarios {...props} onExecuted={onExecuted} />,
  })
  actions.set('FIN', {
    keyRequired: false,
    element: <Financeiro {...props} onExecuted={onExecuted} />,
  })
  actions.set('REPORT', {
    keyRequired: false,
    element: <Relatorio {...props} onExecuted={onExecuted} />,
  })
  actions.set('CFG', {
    keyRequired: false,
    element: <Configuracao {...props} onExecuted={onExecuted} />,
  })
  actions.set('SPT', {
    keyRequired: false,
    element: <Suporte {...props} onExecuted={onExecuted} />,
  })

  return actions.get(actKey)
}

const MenuActions = (props: IActionsProps) => {
  const [element, setElement] = useState<JSX.Element | null>()
  const { onExecuted, actLabel } = props

  useEffect(() => {
    const rst = renderSignActions(props)

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

export { MenuActions }
