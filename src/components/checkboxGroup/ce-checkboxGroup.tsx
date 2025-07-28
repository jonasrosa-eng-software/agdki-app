import { Checkbox, CheckboxGroup } from '@heroui/react'

export interface ICheckBoxProps {
  label: string
  value: string
}

interface ICheckBoxGroupProps {
  defaultValue: string[]
  items: ICheckBoxProps[]
  isDisebled?: boolean
  label?: string
  values: string[]
  onSetValues: (v: string[]) => void
}

const CeCheckBoxGroup = (props: ICheckBoxGroupProps) => {
  const { defaultValue, items, isDisebled = false, label, onSetValues, values } = props
  return (
    <CheckboxGroup
      defaultValue={defaultValue}
      isDisabled={isDisebled}
      label={label}
      orientation="horizontal"
      value={values}
      onValueChange={(v) => {
        onSetValues(v)
      }}
    >
      {items.length > 0 &&
        items.map((item) => {
          return (
            <Checkbox key={item.value} value={item.value}>
              {item.label}
            </Checkbox>
          )
        })}
    </CheckboxGroup>
  )
}

export { CeCheckBoxGroup }
