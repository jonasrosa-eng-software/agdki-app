import { StatusResponseModel } from '@/types/response'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react'

interface ICEGetStatusProps {
  status: StatusResponseModel | null
}

const CEGetStatus = (props: ICEGetStatusProps) => {
  const { status } = props
    

  return (
    <Modal isOpen={true}>
      <ModalContent>
        <ModalHeader>
          <h2>Ops ocorreu um error</h2>
        </ModalHeader>
        <ModalBody>
          <h2>{status?.statusMessage}</h2>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export { CEGetStatus }
