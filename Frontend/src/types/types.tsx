import { z } from 'zod'
import { LoginSchema, SignupSchema } from '@/types/schemas.tsx'

export type TLogin = z.infer<typeof LoginSchema>
export type TSignup = z.infer<typeof SignupSchema>
