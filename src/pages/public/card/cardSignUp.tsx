import { API } from '@/api/api'
import { SignUp } from '@/class/sign'
import { CardDefaultSign } from '@/components/cardSign/cardDefaultSign'

import { CEText, CETextEmail, CETextPassword } from '@/components/textFields/ce-text-field'
import { useAuth } from '@/context/authContext'
import useFormParser from '@/hooks/useFormParser'
import { OptsModel } from '@/types/opts-model'
import { ResponseModel } from '@/types/response'
import { signUpSchema } from '@/schema/singSchema'
import { addToast, Form } from '@heroui/react'
import { useCallback, useEffect, useState } from 'react'
import { CESelect, ISelectItemProps } from '@/components/selected/select'

const CardSignUp = () => {
  const { values, setValue, formErrors, parseValues } = useFormParser(new SignUp(), signUpSchema)
  const { createUserAccount, redirect } = useAuth()
  const [items, setItems] = useState<ISelectItemProps[]>([])

  useEffect(() => {
    setItems([])

    API.get<ResponseModel<OptsModel>>(`/sign-up-form-get`).then((response) => {
      if (!response) {
        return
      }
      const { status, resp } = response.data

      if (status) {
        addToast({
          title: 'Falha ao logar',
          description: status.statusMessage,
          color: 'warning',
        })
        return
      }

      const tmpsOpts = resp?.optsSeguinto || []
      const opts: ISelectItemProps[] = []

      if (tmpsOpts.length > 0) {
        tmpsOpts.map((item) => {
          opts.push({ key: item.key, value: item.longDesc })
        })
      }

      setItems(opts)

      parseValues(new SignUp())
    })
  }, [parseValues])

  const handleSubmit = useCallback(() => {
    createUserAccount(values)
  }, [values])

  return (
    <CardDefaultSign
      isSignIn={false}
      title="Foque no que importa. Cadastre-se agora!"
      onCancel={() => {
        redirect('/')
      }}
      onSubmit={handleSubmit}
    >
      <Form className="gap-4">
        {items.length > 0 && (
          <>
            <CEText
              errorMessage={formErrors.longDesc}
              label="Nome da empresa"
              placeholder="Digite o nome da empresa"
              value={values.longDesc}
              onSetValue={(v) => setValue({ longDesc: v })}
            />
            <CEText
              errorMessage={formErrors.longDesc}
              label="Cnpj"
              placeholder="Digite o nome da empresa"
              value={values.longDesc}
              onSetValue={(v) => setValue({ longDesc: v })}
            />
            <CETextEmail
              errorMessage={formErrors.userName}
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={values.userName}
              onSetValue={(v) => setValue({ userName: v })}
            />
            <CETextPassword
              errorMessage={formErrors.password}
              label="Senha"
              placeholder="Digite sua senha"
              value={values.password}
              onSetValue={(v) => {
                setValue({ password: v })
              }}
            />
            <CESelect
              errorMessage={formErrors.seguimento}
              items={items}
              label="Selecione um seguimento"
              value={values.seguimento}
              onSetValue={(v) => {
                setValue({ seguimento: v })
              }}
            />
          </>
        )}
      </Form>
    </CardDefaultSign>
  )
}

export { CardSignUp }
