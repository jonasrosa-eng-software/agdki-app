import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { VisibilitySmIcon } from '../icons/visibility'
import { Button } from '@heroui/button'
import { LocationIcon } from '../icons/location'

const Extrato = () => {
  return (
    <Card className="h-48 w-full max-w-[400px] bg-default-900 p-2 opacity-85">
      <CardHeader className="flex h-7 items-center justify-between pl-2 pr-2">
        <div className="flex gap-2">
          <LocationIcon color="white" />
          <p className="text-sm font-normal text-white">Saldo em conta</p>
        </div>
      </CardHeader>
      <CardBody className="flex justify-start gap-1 overflow-hidden pl-2">
        {/* <h1 className="font-normal text-white">Saldo em conta</h1> */}
        <div className="flex items-center justify-around">
          <div className="flex w-3/6 justify-around">
            <h1 className="text-xl font-medium text-white">R$ 1000,00</h1>
          </div>
          <div className="flex w-3/6 justify-end">
            <VisibilitySmIcon color="white" />
          </div>
        </div>
      </CardBody>
      <CardFooter className="w-full">
        <Button className="h-9 w-full bg-white text-sm text-default-900" radius="full">
          Ver extrato
        </Button>
      </CardFooter>
    </Card>
  )
}

export { Extrato }
