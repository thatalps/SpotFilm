import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string({ required_error: 'Campo obrigatório' })
    .email({ message: 'Email inválido' }),
  password: z.string({ required_error: 'Campo obrigatório' }),
})

export const SignupSchema = z
  .object({
    name: z
      .string({ required_error: 'Campo obrigatório' })
      .min(3, 'Minimo de 3 letras')
      .max(20, 'Máximo de 20 letras'),
    birthDate: z.string(),
    // birthDate: z.coerce
    //   .date({
    //     errorMap: (issue, { defaultError }) => ({
    //       message:
    //         issue.code === z.ZodIssueCode.invalid_date
    //           ? 'Data inválida'
    //           : defaultError,
    //     }),
    //   })
    //   .refine((date) => {
    //     return date <= new Date(Date.now())
    //   }, 'Data inválida'),
    email: z
      .string({ required_error: 'Campo obrigatório' })
      .email({ message: 'Email inválido' }),
    password: z
      .string({ required_error: 'Campo obrigatório' })
      .regex(/(?=.*\d)/, 'Deve conter ao menos um dígito')
      .regex(/(?=.*[a-z])/, 'Deve conter ao menos uma letra minúscula')
      .regex(/(?=.*[A-Z])/, 'Deve conter ao menos uma letra maiúscula'),
    favGenre1: z.number({ required_error: 'Campo obrigatório' }),
    favGenre2: z.number({ required_error: 'Campo obrigatório' }),
  })
  .refine((data) => data.favGenre1 !== data.favGenre2, {
    path: ['favGenre1'],
    message: 'Devem ser diferentes',
  })

export const createListSchema = z.object({
  title: z.string().min(1),
  movie: z.object({
    id: z.number().nonnegative(),
    name: z.string(),
  }),
})
