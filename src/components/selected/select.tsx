import { Select, SelectItem } from '@heroui/select'
import { useEffect, useState } from 'react'

export interface ISelectItemProps {
  key: string
  value: string
}

interface ISelectPropos {
  items: ISelectItemProps[]
  label: string
  errorMessage?: string
  onSetValue: (value: string) => void
  value: string
}

const CESelect = (props: ISelectPropos) => {
  const { items, label, errorMessage, onSetValue, value } = props

  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  useEffect(() => {
    setIsInvalid(false)
    if (errorMessage && errorMessage.length > 0) {
      setIsInvalid(true)
    }
  }, [errorMessage])

  return (
    <Select
      color={isInvalid ? 'danger' : 'primary'}
      errorMessage={errorMessage}
      items={items}
      label={label}
      value={value}
      variant="bordered"
      onChange={(e) => {
        onSetValue(e.target.value)
      }}
    >
      {items.map((item) => {
        return (
          <SelectItem key={item.key} color="primary">
            {item.value}
          </SelectItem>
        )
      })}
    </Select>
  )
}

export { CESelect }
