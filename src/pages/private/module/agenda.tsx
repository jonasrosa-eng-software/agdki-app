import { Tabs, Tab } from '@heroui/react'
import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../actions/actionsMenu'

const Agenda = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Agenda"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="w-full">
        <Tabs color="primary" variant="underlined">
          <Tab>Agendamentos</Tab>
          <Tab>Reservas manual</Tab>
        </Tabs>
      </div>
    </FormPanelDefault>
  )
}

export default Agenda
