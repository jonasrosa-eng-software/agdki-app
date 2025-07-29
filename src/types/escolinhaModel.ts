import { OptsSelect } from './opts-model'

export type ProfessorProps = {
  nome: string
  avatar: string
  dataNasc: string
  disciplina: string
}

export type TurmasProps = {
  longDesc: string
  turKey: string
  dataIni: string
  dataFim: string
  horIni: string
  horFim: string
  capacidadeAln: number
  localLongDesc: string
  diasSemana: string[]
  professor: ProfessorProps
}

export type StatusAlnProps = {
  msg: 'Atrasado' | 'Adimplente' | 'Inadimplente'
  color: 'success' | 'danger' | 'default' | 'primary' | 'secondary' | 'warning' | undefined
}
export type AlunoProps = {
  alnKey: string
  name: string
  avatar: string
  dataNasc: string
  idade: number
  status: StatusAlnProps
}

export type TurmaFormGetProps = {
  turma: TurmaFormGetProps
  optsProf: OptsSelect
  optsHor: OptsSelect
  optsMod: OptsSelect
}

