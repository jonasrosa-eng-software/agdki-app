export type SessionProps = {
  IdUser: string
  IsAdmin: boolean
  // IdPermission int32  `json:"id_permission"`
}

export type AuthUserProps = {
  idMnt: number
  name: string
  token: string
  refreshToken: string
  // avatar: string
  // session: SessionProps
}

export type CreateUserAccountProps = {
  longDesc: string
  seguimento: string
  userName: string
  password: string
}

export type ISignInProps = {
  userName: string
  password: string
}
