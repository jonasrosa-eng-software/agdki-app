import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from '@heroui/react'

interface IPersonaProps {
  avatar: string
  statusUser: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined
}

const Persona = (props: IPersonaProps) => {
  const { avatar, statusUser } = props
  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <Avatar isBordered alt="Imagem do usuário" color={statusUser} size="sm" src={avatar} />
      </PopoverTrigger>
      <PopoverContent>
        <PersonaDetal />
      </PopoverContent>
    </Popover>
  )
}

const PersonaDetal = () => {
  return (
    <Card className="h-auto w-72 p-2">
      <CardHeader className="flex">
        <User
          avatarProps={{
            src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
          }}
          description={
            <div className="flex flex-col">
              <h2 className="text-rose-500"> Empresa Quadra teste</h2>
            </div>
          }
          name="Jonas"
        />
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        <h2>Data de inclusão: 20/02/2025</h2>
        <h2>Vencimento da fatura: 20/02/2025</h2>
      </CardBody>
    </Card>
  )
}
export { Persona }
