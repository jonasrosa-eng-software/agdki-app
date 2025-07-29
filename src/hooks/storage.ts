import { get, set, del } from 'idb-keyval'

const keyToken = 'access_token'

//salvar Token
export const saveAccesstoken = (token: string) => set(keyToken, token)
//buscar o Token
export const getAccesstoken = () => get(keyToken)
//remover Token
export const removeAccessToken = () => del(keyToken)
