export type StatusResponseModel = {
  active: boolean
  statusMessage: string
  statusCode: number
}

export type ResponseModel<T> = {
  status: StatusResponseModel
  resp: T
}
