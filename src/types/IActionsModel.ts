import { iconMap } from '@/components/icons/iconMap'

export type IActionsProps = {
  actKey: string
  actLabel: string
  action: boolean
}

export const BlackActions: IActionsProps = {
  actKey: '',
  actLabel: '',
  action: false,
}

export type Icon = keyof typeof iconMap

export type ActionsProps = {
  actKey: string
  actLabel: string
  active: true
  icon: Icon
}

export type ActionsItems = {
  actsItems: ActionsProps[]
}
