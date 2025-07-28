import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../actions/actionsMenu'

const Financeiro = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Financeiro"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="w-full">Financeiro</div>
    </FormPanelDefault>
  )
}

export default Financeiro
