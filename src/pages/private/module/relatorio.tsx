import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../actions/actionsMenu'

const Relatorio = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Relatório"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="w-full">Relatório</div>
    </FormPanelDefault>
  )
}

export default Relatorio
