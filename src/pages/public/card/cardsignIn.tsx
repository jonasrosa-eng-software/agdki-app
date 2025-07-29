import { useCallback, useEffect } from 'react'
import { SignIn } from '@/class/sign'
import { CETextEmail, CETextPassword } from '@/components/textFields/ce-text-field'
import useFormParser from '@/hooks/useFormParser'
import { signInSchema } from '@/schema/singSchema'
import { CardDefaultSign } from '@/components/cardSign/cardDefaultSign'
import { Form } from '@heroui/react'
import { useAuth } from '@/context/authContext'

const CardSignIn = () => {
  const { values, setValue, formErrors, parseValues } = useFormParser(new SignIn(), signInSchema)
  const { signIn, redirect } = useAuth()

  useEffect(() => {
    parseValues(new SignIn())
  }, [parseValues])

  const handleSubmit = useCallback(() => {
    signIn(values)
  }, [values])

  return (
    <CardDefaultSign
      isSignIn
      title="Acesse sua conta e comece a agendar seus compromissos."
      onCancel={() => {
        redirect('/')
      }}
      onSubmit={handleSubmit}
    >
      <Form className="gap-4">
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
          onSetValue={(v) => setValue({ password: v })}
        />
      </Form>
    </CardDefaultSign>
  )
}

export { CardSignIn }
