import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../actions/actionsMenu'

const Reserva = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Reserva"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="w-full">Reserva</div>
    </FormPanelDefault>
  )
}

export default Reserva
