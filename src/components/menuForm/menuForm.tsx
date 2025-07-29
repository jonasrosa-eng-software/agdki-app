import { ActionsItems, BlackActions, IActionsProps } from '@/types/IActionsModel'
import { Button, Tooltip } from '@heroui/react'
import { CreateIcon } from '../icons/create'
import { EditIcon } from '../icons/edit'
import { DeleteIcon } from '../icons/delete'
import { useEffect, useState } from 'react'
import { API } from '@/api/api'
import { ResponseModel } from '@/types/response'
import { ActionsProps } from '@/class/actions'

const MenuForm = () => {
  const [actions, setActions] = useState<IActionsProps>(BlackActions)
  const [actsItems, setActsItems] = useState<ActionsProps[]>([])
  useEffect(() => {
    API.get<ResponseModel<ActionsItems>>('/acts', {
      params: {
        idParant: 'ROOT_QDA_MENU',
      },
    }).then((response) => {
      if (!response) {
        return
      }
      const { resp, status } = response.data
      if (status) {
      }

      const tmpActs = resp.actsItems

      setActsItems(tmpActs)
    })
  }, [])

  console.log('actsItems', actsItems)
  console.log('actions', actions)
  return (
    <div className="mb-2 w-full gap-2">
      <Tooltip content={'Criar turma'}>
        <Button
          isIconOnly
          aria-label="Like"
          className="h-8 w-8"
          color="primary"
          variant="light"
          onPress={() => {
            setActions({
              action: true,
              actKey: 'TUR_CREATE',
              actLabel: 'Criar turma',
            })
          }}
        >
          <CreateIcon height={24} width={24} />
        </Button>
      </Tooltip>
      <Tooltip content={'Editar turma'}>
        <Button
          isIconOnly
          aria-label="Like"
          className="h-8 w-8"
          color="primary"
          variant="light"
          onPress={() => {
            setActions({
              action: true,
              actKey: 'TUR_EDIT',
              actLabel: 'Editar turma',
            })
          }}
        >
          <EditIcon height={24} width={24} />
        </Button>
      </Tooltip>
      <Tooltip content={'Excluir turma'}>
        <Button
          isIconOnly
          aria-label="Like"
          className="h-8 w-8"
          color="primary"
          variant="light"
          onPress={() => {
            setActions({
              action: true,
              actKey: 'TUR_DELETE',
              actLabel: 'Excluir turmas',
            })
          }}
        >
          <DeleteIcon height={24} width={24} />
        </Button>
      </Tooltip>
    </div>
  )
}

export { MenuForm }
