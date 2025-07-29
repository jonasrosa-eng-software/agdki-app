import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../actions/actionsMenu'

const Suporte = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Suporte"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="w-full">Suporte</div>
    </FormPanelDefault>
  )
}

export default Suporte
