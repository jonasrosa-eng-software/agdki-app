import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../actions/actionsMenu'

const Funcionarios = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Funcionários"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="w-full">Funcionários</div>
    </FormPanelDefault>
  )
}

export default Funcionarios
