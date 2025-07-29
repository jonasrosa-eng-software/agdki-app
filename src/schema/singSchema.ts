import { z } from 'zod'

const signInSchema = z.object({
  userName: z.string().refine((val) => val.length > 0, {
    message: 'Por favor, informe um e-mail válido.',
  }),
  password: z
    .string()
    .min(6)
    .max(30)
    .refine((val) => val.length > 0, {
      message: 'Por favor, informe uma senha válida.',
    }),
})

const signUpSchema = z.object({
  userName: z.string().refine((val) => val.length > 0, {
    message: 'Por favor, informe um e-mail válido.',
  }),
  password: z.string().refine((val) => val.length > 7, {
    message: 'Por favor, informe uma senha válida de 8 caracteres.',
  }),
  seguimento: z.string().refine((val) => val.length > 0, {
    message: 'Por favor, informe um seguimento válido.',
  }),
  longDesc: z.string().refine((val) => val.length > 0, {
    message: 'Por favor, informe o nome da empresa.',
  }),
})

export { signInSchema, signUpSchema }
