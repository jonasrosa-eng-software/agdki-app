import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../actions/actionsMenu'

const Estoque = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Estoque"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="w-full">Estoque</div>
    </FormPanelDefault>
  )
}

export default Estoque
