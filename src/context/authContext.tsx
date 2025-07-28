import { API } from '@/api/api'
import { AuthUserProps, CreateUserAccountProps, ISignInProps } from '@/types/authModel'
import { ResponseModel } from '@/types/response'
import { addToast } from '@heroui/react'

import { createContext, ReactNode, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextProps {
  createUserAccount: (value: CreateUserAccountProps) => void
  signIn: (values: ISignInProps) => void
  redirect: (path: string) => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

interface AuthProviderProps {
  children: ReactNode
}

const passWordKey = import.meta.env.SECRET_KEY

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props
  const navagate = useNavigate()

  const redirect = (path: string) => {
    navagate(path)
  }

  //criar conta
  const createUserAccount = useCallback((value: CreateUserAccountProps) => {
    //cryptografar password antes de salvar
    // value.password = encrypt(value.password, passWordKey)

    API.post<ResponseModel<any>>('/create-user-account', value, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then((response) => {
        const { status } = response.data
        if (!response) {
          return
        }
        if (status) {
          addToast({
            title: 'Falha ao criar conta',
            description: status.statusMessage,
            color: 'danger',
          })
          return
        }
      })
      .catch((error) => {
        addToast({
          title: 'Falha ao criar conta',
          description: error,
          color: 'danger',
        })
      })
  }, [])

  const signIn = useCallback((values: ISignInProps) => {
    //cryptografar password antes de logar
    // values.password = encrypt(values.password, passWordKey)
    console.log(values)

    API.get<ResponseModel<AuthUserProps>>('/sign-in', {
      params: values,
    })
      .then((response) => {
        const { resp, status } = response.data
        if (status) {
          addToast({
            title: 'Falha tentar Logar',
            description: status.statusMessage,
            color: 'danger',
          })
          return
        }
        redirect(`/main/${resp.idMnt}`)
      })
      .catch((error) => {
        addToast({
          title: 'Falha ao logar',
          description: error,
          color: 'danger',
        })
      })
  }, [])

  return (
    <AuthContext.Provider value={{ createUserAccount, signIn, redirect }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }

// API.interceptors.request.use(async (config) => {
//   const token = await getAccesstoken()
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

// API.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     if (err.response.status == 401) {
//       const res = await API.post('/refresh', {}, { withCredentials: true })
//       const newToken = res.data.access_token
//       await saveAccesstoken(newToken)
//       err.config.headers.Authorization = `Bearer ${newToken}`
//       return API(err.config)
//     }
//     return Promise.reject(err)
//   }
// )
