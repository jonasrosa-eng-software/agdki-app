import { Turma } from '@/pages/private/module/escolinha/class/escolinha'
import { CEDate } from '@/components/date/date'
import { FormDefault } from '@/components/forms/forms'

import { CENumber, CEText } from '@/components/textFields/ce-text-field'
import useFormParser from '@/hooks/useFormParser'
import { TurmaCreateSchema } from '../schema/escolinhaSchema'
import { useEffect, useState } from 'react'
import { CeCheckBoxDate } from '@/components/checkBoxDate/checkBoxDate'
import { StatusResponseModel } from '@/types/response'

import { OptSelect } from '@/types/opts-model'

import { ModeOptionsStatus } from '@/enum/commom'
import { LoadSpinner } from '@/components/loadSpinner/loadSpinner'
import { CEGetStatus } from '@/components/getStatus/getStatus'
import { CESelect, ISelectItemProps } from '@/components/selected/select'

interface ITurmaFormEditProps {
  active: boolean
  mode: ModeOptionsStatus
  onDismissed: () => void
  onExecuted: () => void
}

const transformeSelectItems = (v: OptSelect[]): ISelectItemProps[] => {
  const tmpSelectItem: ISelectItemProps[] = []
  if (v && v.length) {
    v.map((item) => {
      tmpSelectItem.push({ key: item.key, value: item.value })
    })
  }
  return tmpSelectItem
}

const TurmaFormEdit = (props: ITurmaFormEditProps) => {
  const { onExecuted, onDismissed, mode } = props
  const { values, setValue, parseValues, formErrors, disabled } = useFormParser(
    new Turma(),
    TurmaCreateSchema
  )
  const [getStatus, setGetStatus] = useState<StatusResponseModel | null>()
  const [optsProf, setOptsProf] = useState<ISelectItemProps[]>([])
  const [optsHor, setOptsHor] = useState<ISelectItemProps[]>([])
  const [optsMod, setOptsMod] = useState<ISelectItemProps[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // API.get<ResponseModel<TurmaFormGetProps>>('/turma-form-get', {
    //   params: {
    //     focus: focus,
    //     mode: mode,
    //   },
    // }).then((response) => {
    //   if (!response) {
    //     return
    //   }
    //   const { status, resp } = response.data

    //   if (status) {
    //     //implementar getStatus
    //   }

    //   const tmpOptsProf = resp.optsProf || []
    //   setOptsProf(transformeSelectItems(tmpOptsProf.optsSelect))
    //   const tmpOptsHor = resp.optsHor || []
    //   setOptsHor(transformeSelectItems(tmpOptsHor.optsSelect))
    //   const tmpOptsMod = resp.optsMod || []
    //   setOptsMod(transformeSelectItems(tmpOptsMod.optsSelect))
    // })
    setTimeout(() => {
      setMounted(true)
    }, 1000)
    parseValues({ ...new Turma() })
  }, [])

  const onSubmit = () => {
    onExecuted()
  }

  return (
    <FormDefault
      isOpen={true}
      submitDisabled={disabled}
      title={mode === ModeOptionsStatus.CREATE ? 'Criar turma' : 'Editar turma'}
      onCancel={onDismissed}
      onClose={onDismissed}
      onSubmit={onSubmit}
    >
      {getStatus && <CEGetStatus status={getStatus} />}
      {mounted && !getStatus ? (
        <>
          <CEText
            errorMessage={formErrors.longDesc}
            label="Nome da turma"
            placeholder="Digite o nome da turma"
            value={values.longDesc}
            onSetValue={(v) => {
              setValue({ longDesc: v })
            }}
          />
          <CENumber
            errorMessage={formErrors.capacidade}
            label="Capacidade da turma"
            placeholder="Informa a capacidade de vagas"
            value={Number(values.capacidade)}
            onSetValue={(v) => {
              setValue({ capacidade: Number(v) })
            }}
          />
          <CEDate
            errorMessage={formErrors.dataIni}
            label="Inicío"
            value={values.dataIni}
            onSetValues={(v) => {
              setValue({ dataIni: v })
            }}
          />
          <CEDate
            errorMessage={formErrors.dataFim}
            label="Termíno"
            value={values.dataFim}
            onSetValues={(v) => {
              setValue({ dataFim: v })
            }}
          />
          <CESelect
            errorMessage={formErrors.madalidade}
            items={optsMod}
            label="Selecione uma quadra"
            value={values.madalidade}
            onSetValue={(v) => {
              setValue({ madalidade: v })
            }}
          />
          <CESelect
            errorMessage={formErrors.horKey}
            items={optsHor}
            label="Selecione um Horário"
            value={values.horKey}
            onSetValue={(v) => {
              setValue({ horKey: v })
            }}
          />
          <CESelect
            errorMessage={formErrors.madalidade}
            items={optsMod}
            label="Selecione uma modalidade"
            value={values.madalidade}
            onSetValue={(v) => {
              setValue({ madalidade: v })
            }}
          />
          <CESelect
            errorMessage={formErrors.profKey}
            items={optsProf}
            label="Selecione um Professor"
            value={values.profKey}
            onSetValue={(v) => {
              setValue({ profKey: v })
            }}
          />
          <CeCheckBoxDate
            label="Seleciones os dias da semana"
            value={values.diasSemana}
            onSetValues={(v) => {
              setValue({ diasSemana: v })
            }}
          />
        </>
      ) : (
        <div className="flex h-full w-full justify-center">
          <LoadSpinner />
        </div>
      )}
    </FormDefault>
  )
}
export default TurmaFormEdit
