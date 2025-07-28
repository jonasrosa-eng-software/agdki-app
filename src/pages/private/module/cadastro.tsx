import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../actions/actionsMenu'

const Cadastro = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Cadastro"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="w-full">Cadastro</div>
    </FormPanelDefault>
  )
}

export default Cadastro
