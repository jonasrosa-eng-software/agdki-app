import { z } from 'zod'

const TurmaCreateSchema = z.object({
  longDesc: z.string().refine((val) => val.length > 0, {
    message: 'Por favor, informe um nome para turma.',
  }),
  capacidade: z.number().refine((val) => val !== 0, {
    message: 'Por favor, informe capacidade da turma.',
  }),
  dataIni: z.string().refine((val) => val.length > 0, {
    message: 'Por favor, informe a data inícial.',
  }),
  dataFim: z.string().refine((val) => val.length > 0, {
    message: 'Por favor, informe a data final.',
  }),
  madalidade: z.string().refine((val) => val !== '', {
    message: 'Por favor, selecione uma modalidade',
  }),
  profKey: z.string().refine((val) => val.length > 0, {
    message: 'Por favor, selecione um professor',
  }),
  horKey: z.string().refine((val) => val.length > 0, {
    message: 'Por favor, selecione um professor',
  }),
})

export { TurmaCreateSchema }
