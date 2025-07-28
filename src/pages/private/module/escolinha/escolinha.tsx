import { FormPanelDefault } from '@/components/forms/forms'
import { IActionsProps } from '../../actions/actionsMenu'
import { Accordion, AccordionItem, Avatar, Button, Chip, Tab, Tabs, Tooltip } from '@heroui/react'
import { CreateIcon } from '@/components/icons/create'
import { EditIcon } from '@/components/icons/edit'
import { DeleteIcon } from '@/components/icons/delete'
import { AlunoProps } from '@/types/escolinhaModel'

import { Turmas } from './tabs/turmas'
import { CESelect } from '@/components/selected/select'

const Escolinha = (props: IActionsProps) => {
  const { onExecuted, action } = props
  return (
    <FormPanelDefault
      isOpen={action}
      title="Escolinha"
      onClose={() => {
        onExecuted()
      }}
    >
      <div className="flex w-full flex-col">
        <Tabs color="primary" fullWidth={true} variant="underlined">
          <Tab title={'Turma'}>
            <Turmas />
          </Tab>
          <Tab title={'Alunos'}>
            <Alunos />
          </Tab>
        </Tabs>
      </div>
    </FormPanelDefault>
  )
}

const alunos: AlunoProps[] = [
  {
    alnKey: '1',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Adimplente',
      color: 'success',
    },
  },
  {
    alnKey: '2',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Atrasado',
      color: 'warning',
    },
  },
  {
    alnKey: '3',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Inadimplente',
      color: 'danger',
    },
  },
  {
    alnKey: '1',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Adimplente',
      color: 'success',
    },
  },
  {
    alnKey: '2',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Atrasado',
      color: 'warning',
    },
  },
  {
    alnKey: '3',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Inadimplente',
      color: 'danger',
    },
  },
  {
    alnKey: '1',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Adimplente',
      color: 'success',
    },
  },
  {
    alnKey: '2',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Atrasado',
      color: 'warning',
    },
  },
  {
    alnKey: '3',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Inadimplente',
      color: 'danger',
    },
  },
  {
    alnKey: '1',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Adimplente',
      color: 'success',
    },
  },
  {
    alnKey: '2',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Atrasado',
      color: 'warning',
    },
  },
  {
    alnKey: '3',
    name: 'Carlos Augusto',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    dataNasc: '20/08/2025',
    idade: 10,
    status: {
      msg: 'Inadimplente',
      color: 'danger',
    },
  },
]

const Alunos = () => {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="mb-2 flex w-full gap-6">
        <Tooltip content={'Criar turma'}>
          <Button isIconOnly aria-label="Like" className="h-8 w-8" color="primary" variant="light">
            <CreateIcon height={24} width={24} />
          </Button>
        </Tooltip>
        <CESelect
          items={[{ key: '1', value: 'Turma 1' }]}
          label="Seleciona uma turma"
          value=""
          onSetValue={() => {}}
        />
      </div>
      {alunos && alunos.length > 0 ? (
        <Accordion variant="shadow">
          {alunos.map((aln) => {
            return (
              <AccordionItem
                key={aln.alnKey}
                aria-label="Accordion 1"
                startContent={<Avatar src={aln.avatar} />}
                subtitle={
                  <div className="flex w-full items-center justify-between gap-2">
                    <Chip color={aln.status.color} radius="sm" size="sm">
                      {aln.status.msg}
                    </Chip>
                    <div className="flex w-28 items-end justify-end">
                      <Tooltip content={'Editar turma'}>
                        <Button
                          isIconOnly
                          aria-label="Like"
                          className="h-8 w-8"
                          color="primary"
                          variant="light"
                        >
                          <EditIcon height={20} width={20} />
                        </Button>
                      </Tooltip>
                      <Tooltip content={'Excluir turma'}>
                        <Button
                          isIconOnly
                          aria-label="Like"
                          className="h-8 w-8"
                          color="danger"
                          variant="light"
                        >
                          <DeleteIcon height={20} width={20} />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                }
                title={
                  <div className="">
                    <p className="mb-1 text-sm">{aln.name}</p>
                  </div>
                }
              >
                <div className="flex h-full w-full flex-col gap-1">
                  <div className="flex w-full gap-2">
                    <p className="text-sm">Data Nasc :</p>
                    <p className="text-sm">{aln.dataNasc}</p>
                  </div>

                  <div className="flex w-full gap-2">
                    <p className="text-sm">Responsavel:</p>
                    <p>{}</p>
                  </div>

                  <div className="flex w-full gap-2">
                    <p className="text-sm">Contato:</p>
                    <p>{}</p>
                  </div>
                  <div className="flex w-full gap-2">
                    <p className="text-sm">Contato de emergencia:</p>
                    <p>{}</p>
                  </div>
                  <div className="flex w-full gap-2">
                    <p className="text-sm">Endereço:</p>
                    <p>{}</p>
                  </div>
                </div>
              </AccordionItem>
            )
          })}
        </Accordion>
      ) : (
        <div>Msg</div>
      )}
    </div>
  )
}

export default Escolinha
