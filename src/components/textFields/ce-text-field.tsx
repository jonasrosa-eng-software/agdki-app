import { Input } from '@heroui/input'
import { NumberInput } from '@heroui/react'
import { useEffect, useState } from 'react'

interface ICETextProps {
  label: string
  placeholder: string
  errorMessage?: string
  value: string
  onSetValue: (value: string) => void
}

const CETextEmail = (props: ICETextProps) => {
  const { label, placeholder, errorMessage, onSetValue, value } = props
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  useEffect(() => {
    setIsInvalid(false)
    if (errorMessage && errorMessage.length > 0) {
      setIsInvalid(true)
    }
  }, [errorMessage])

  return (
    <Input
      className="w-full"
      color={isInvalid ? 'danger' : 'primary'}
      errorMessage={errorMessage}
      isInvalid={!!errorMessage}
      label={label}
      placeholder={placeholder}
      type={'email'}
      value={value}
      variant="bordered"
      onChange={(e) => {
        onSetValue(e.target.value)
      }}
    />
  )
}

const CETextPassword = (props: ICETextProps) => {
  const { label, placeholder, errorMessage, value, onSetValue } = props
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  useEffect(() => {
    setIsInvalid(false)
    if (errorMessage && errorMessage.length > 0) {
      setIsInvalid(true)
    }
  }, [errorMessage])

  return (
    <Input
      className="w-full border-primary-500"
      color={isInvalid ? 'danger' : 'primary'}
      errorMessage={errorMessage}
      isInvalid={!!errorMessage}
      label={label}
      placeholder={placeholder}
      type={'password'}
      value={value}
      variant="bordered"
      onChange={(e) => {
        onSetValue(e.target.value)
      }}
    />
  )
}

const CEText = (props: ICETextProps) => {
  const { label, placeholder, errorMessage, value, onSetValue } = props
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  useEffect(() => {
    setIsInvalid(false)
    if (errorMessage && errorMessage.length > 0) {
      setIsInvalid(true)
    }
  }, [errorMessage])

  return (
    <Input
      className="w-full"
      color={isInvalid ? 'danger' : 'primary'}
      errorMessage={errorMessage}
      isInvalid={!!errorMessage}
      label={label}
      placeholder={placeholder}
      type={'text'}
      value={value}
      variant="bordered"
      onChange={(e) => {
        onSetValue(e.target.value)
      }}
    />
  )
}

interface ICENumberProps {
  label: string
  placeholder: string
  errorMessage?: string
  value: number
  onSetValue: (value: number) => void
}

const CENumber = (props: ICENumberProps) => {
  const { label, placeholder, errorMessage, value, onSetValue } = props
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  useEffect(() => {
    setIsInvalid(false)
    if (errorMessage && errorMessage.length > 0) {
      setIsInvalid(true)
    }
  }, [errorMessage])

  return (
    <NumberInput
      hideStepper
      className="w-full"
      color={isInvalid ? 'danger' : 'primary'}
      defaultValue={value}
      errorMessage={errorMessage}
      isInvalid={!!errorMessage}
      label={label}
      placeholder={placeholder}
      value={value}
      variant="bordered"
      onValueChange={(e) => {
        onSetValue(e)
      }}
    />
  )
}

export { CEText, CETextEmail, CETextPassword, CENumber }
