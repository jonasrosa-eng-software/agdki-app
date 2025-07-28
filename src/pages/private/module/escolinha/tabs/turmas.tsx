import { CreateIcon } from '@/components/icons/create'
import { DeleteIcon } from '@/components/icons/delete'
import { EditIcon } from '@/components/icons/edit'
import { TurmasProps } from '@/types/escolinhaModel'
import { Accordion, AccordionItem, Button, Tooltip, User } from '@heroui/react'
import { TurmasActions } from '../actions/turmasActions'
import { BlackActions, IActionsProps } from '@/types/IActionsModel'
import { useEffect, useState } from 'react'
import { GroupIcon } from '@/components/icons/group'
import { TimeIcon } from '@/components/icons/time'
import { API } from '@/api/api'
import { ResponseModel } from '@/types/response'
import { CeCheckBoxDate } from '@/components/checkBoxDate/checkBoxDate'

let turmas: TurmasProps[] = [
  {
    longDesc: 'tumas 1',
    turKey: '1',
    dataIni: '01/05/2025',
    dataFim: '01/12/2025',
    horIni: '08:30',
    horFim: '09:30',
    capacidadeAln: 15,
    localLongDesc: 'quadra 1',
    diasSemana: ['seg', 'ter', 'qua'],
    professor: {
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      dataNasc: '20/08/2025',
      disciplina: 'Futebol',
      nome: 'Carlos José',
    },
  },
  {
    longDesc: 'tumas 2',
    turKey: '2',
    dataIni: '01/05/2025',
    dataFim: '01/12/2025',
    horIni: '08:30',
    horFim: '09:30',
    capacidadeAln: 15,
    localLongDesc: 'quadra 2',
    diasSemana: ['seg', 'ter', 'Qui'],
    professor: {
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      dataNasc: '20/08/2025',
      disciplina: 'Futebol',
      nome: 'Carlos José',
    },
  },
]

const Turmas = () => {
  const [actions, setActions] = useState<IActionsProps>(BlackActions)
  const [focus, setFocus] = useState('')

  useEffect(() => {
    API.get<ResponseModel<TurmasProps[]>>('/turma-form-get')
  }, [])

  return (
    <div className="h-full w-full gap-1">
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
                actLabel: 'Criar turmas',
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
                actLabel: 'Editar turmas',
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
      {turmas && turmas.length > 0 ? (
        <Accordion variant="bordered">
          {turmas.map((tur) => {
            return (
              <AccordionItem
                key={tur.turKey}
                aria-label={tur.localLongDesc}
                subtitle={
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary-500" height={24} width={24} />
                    <h3>
                      {tur.horIni} as {tur.horFim}
                    </h3>
                  </div>
                }
                title={
                  <div className="flex gap-2">
                    <GroupIcon className="text-primary-500" height={24} width={24} />
                    <h2>{tur.longDesc}</h2>
                  </div>
                }
                onPress={() => {
                  setFocus(tur.turKey)
                }}
              >
                <div className="flex h-full w-full flex-col gap-1">
                  <div className="flex w-full">
                    <User
                      avatarProps={{
                        src: tur.professor.avatar,
                      }}
                      description={
                        <div className="flex flex-col">
                          <h2 className="text-rose-500">Professor: {tur.professor.disciplina}</h2>
                        </div>
                      }
                      name="Jonas"
                    />
                  </div>
                  <div className="flex w-full gap-2">
                    <p className="text-sm text-primary-500">Quantidade de alunos:</p>
                    <p className="text-sm">{tur.capacidadeAln}</p>
                  </div>
                  <div className="flex w-full gap-2">
                    <p className="text-sm text-primary-500">Local:</p>
                    <p className="text-sm">{tur.localLongDesc}</p>
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <p className="text-sm text-primary-500">Dias da semana:</p>
                    <CeCheckBoxDate
                      isDisebled
                      value={tur.diasSemana}
                      onSetValues={() => {
                        //
                      }}
                    />
                  </div>
                </div>
              </AccordionItem>
            )
          })}
        </Accordion>
      ) : (
        <div>Vc não Possui Turma cadastrada</div>
      )}
      {actions.action && (
        <TurmasActions
          actKey={actions.actKey}
          actLabel={actions.actLabel}
          action={actions.action}
          focus={focus}
          onDismissed={() => {
            setActions(BlackActions)
          }}
          onExecuted={() => {
            setActions(BlackActions)
          }}
        />
      )}
    </div>
  )
}

export { Turmas }
