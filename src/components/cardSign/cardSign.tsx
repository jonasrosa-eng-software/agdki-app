import { Card, CardHeader, CardBody, CardFooter, Button, Image } from '@heroui/react'
import { ThemeSwitch } from '../theme-switch'

import logoLight from '@/assets/images/logo_blue2.png'
import { VisibilitySmIcon } from '../icons/visibility'
import { ReactNode } from 'react'
import { TimeIcon } from '../icons/time'
import { NotificationIcon } from '../icons/notification'
import { ReportIcon } from '../icons/report'
import { CardIcon } from '../icons/card'
import { useNavigate } from 'react-router-dom'

const CardSing = () => {
  const navegate = useNavigate()

  const redirect = (path: string) => {
    navegate(path)
  }

  return (
    <>
      <Card className="h-full w-full max-w-screen-sm">
        <CardHeader className="mt-4 flex justify-center">
          <Image className="w-[200px]" src={logoLight} />
          <ThemeSwitch />
        </CardHeader>
        <CardBody className="flex h-32 items-center justify-start gap-2">
          <div className="mb-2">
            <h2 className="text-center text-lg font-semibold text-default-900">
              Gerencie seu negócio com eficiência!
            </h2>
          </div>
          <div className="flex h-2/3 flex-col justify-evenly">
            <BoxIconText
              icon={<VisibilitySmIcon color="#006FEE" />}
              text={'Acompanhe as reservas em tempo real'}
            />
            <BoxIconText
              icon={<TimeIcon color="#006FEE" />}
              text={'Organize e ajuste os horários com facilidade'}
            />
            <BoxIconText
              icon={<CardIcon color="#006FEE" />}
              text={'Acesse relatórios detalhadosde uso e desempenho'}
            />
            <BoxIconText
              icon={<NotificationIcon color="#006FEE" />}
              text={'Receba notificações sobre novas reservas e cancelamentos'}
            />
            <BoxIconText
              icon={<ReportIcon color="#006FEE" />}
              text={'Gerencie os pagamentos de forma segura'}
            />
          </div>
        </CardBody>
        <CardFooter className="flex flex-col justify-center gap-4 p-6">
          <Button
            className="w-full uppercase"
            color="primary"
            onPress={() => {
              redirect('/login')
            }}
          >
            Entrar
          </Button>
          <Button
            className="w-full uppercase"
            color="primary"
            variant="ghost"
            onPress={() => {
              redirect('/signup')
            }}
          >
            Cadastrar
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

interface IBoxIconTextProps {
  icon: ReactNode
  text: string
}

const BoxIconText = (props: IBoxIconTextProps) => {
  const { icon, text } = props
  return (
    <div className="flex gap-3">
      <div className="w-auto"> {icon}</div>
      <p className="text-sm text-default-900">{text}</p>
    </div>
  )
}

export { CardSing }
