import { CeCheckBoxGroup, ICheckBoxProps } from '../checkboxGroup/ce-checkboxGroup'

interface ICeCheckBoxDateProps {
  label?: string
  value: string[]
  onSetValues: (v: string[]) => void
  isDisebled?: boolean
}

const items: ICheckBoxProps[] = [
  { value: 'seg', label: 'Seg' },
  { value: 'ter', label: 'Teg' },
  { value: 'qua', label: 'Qua' },
  { value: 'qui', label: 'Qui' },
  { value: 'sex', label: 'Sex' },
  { value: 'sab', label: 'Sab' },
  { value: 'dom', label: 'Dom' },
]

const CeCheckBoxDate = (props: ICeCheckBoxDateProps) => {
  const { value, label, onSetValues, isDisebled } = props
  return (
    <CeCheckBoxGroup
      defaultValue={value}
      isDisebled={isDisebled}
      items={items}
      label={label}
      values={value}
      onSetValues={onSetValues}
    />
  )
}

export { CeCheckBoxDate }
