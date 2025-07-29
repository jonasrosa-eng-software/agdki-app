import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../actions/actionsMenu'

const Configuracao = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Configurar quadra"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="w-full">Configuração</div>
    </FormPanelDefault>
  )
}

export default Configuracao
