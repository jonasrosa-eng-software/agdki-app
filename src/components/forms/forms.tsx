import { ReactNode, useEffect, useState } from 'react'
import logoLight from '@/assets/images/logo_blue.png'
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@heroui/drawer'
import { Button } from '@heroui/button'
import { Form, Image } from '@heroui/react'

type IFormProps = {
  isOpen: boolean
  title: string
  children: ReactNode
  isFootterVertical: boolean
  onClose: () => void
  onSubmit?: () => void
  onCancel?: () => void
}

type IFormDefaultProps = {
  isOpen: boolean
  title: string
  children: ReactNode

  onClose: () => void
  onSubmit?: () => void
  onCancel?: () => void
  submitDisabled: boolean
}

const FormDefault = (props: IFormDefaultProps) => {
  const { isOpen, title, children, submitDisabled, onSubmit, onCancel, onClose } = props
  const [open, setOpen] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [isOpen])

  useEffect(() => {
    setDisabled(submitDisabled)
  }, [submitDisabled])
  return (
    <Drawer
      isOpen={open}
      onOpenChange={(v) => {
        setOpen(v), onClose()
      }}
    >
      <DrawerContent>
        <DrawerHeader className="bordee flex h-11 items-center border-b-1">
          <h2 className="text-primary-500">{title}</h2>
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter className="flex h-14 items-start gap-2 border border-t-1 p-2">
          <Button
            className="uppercase"
            color="primary"
            isDisabled={disabled}
            variant="solid"
            onPress={onSubmit}
          >
            salvar
          </Button>
          <Button className="uppercase text-white" color="danger" onPress={onCancel}>
            voltar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

type IFormPanelProps = Omit<IFormProps, 'isFootterVertical' | 'onSubmit' | 'onCancel'>

const FormPanelDefault = (props: IFormPanelProps) => {
  const { isOpen, title, children, onClose } = props
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [isOpen])

  return (
    <Drawer
      className="w-screen"
      isOpen={open}
      size="full"
      onOpenChange={(v) => {
        setOpen(v), onClose()
      }}
    >
      <DrawerContent>
        <DrawerHeader className="flex h-11 items-center border border-b-1">
          <h2 className="text-primary-500">{title}</h2>
        </DrawerHeader>
        <DrawerBody className="p-0">{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

interface IFormSignInProps extends IFormProps {
  isSignIn: boolean
}

const FormSign = (props: IFormSignInProps) => {
  const {
    isOpen,
    title,
    children,
    isFootterVertical = false,
    onClose,
    onSubmit,
    onCancel,
    isSignIn,
  } = props
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [isOpen])

  return (
    <Drawer
      isOpen={open}
      onOpenChange={(v) => {
        setOpen(v), onClose()
      }}
    >
      <DrawerContent>
        <DrawerHeader className="flex flex-col items-center gap-4">
          <Image className="w-[200px]" src={logoLight} />
          <div className="text-center text-default-900">
            <h2>{title}</h2>
          </div>
        </DrawerHeader>
        <DrawerBody>
          <Form className="gap-4">{children}</Form>
        </DrawerBody>
        <DrawerFooter className={`flex ${isFootterVertical ? 'flex-col' : 'flex-row'} gap-4`}>
          {isSignIn ? (
            <>
              <Button className="w-full uppercase" color="primary" onPress={onSubmit}>
                Entrar
              </Button>
              <Button className="w-full" color="secondary" variant="light" onPress={onCancel}>
                Esqueceu a senha?
              </Button>
            </>
          ) : (
            <>
              <Button className="w-full uppercase" color="primary" onPress={onSubmit}>
                Cadastar
              </Button>
            </>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
export { FormDefault, FormSign, FormPanelDefault }
