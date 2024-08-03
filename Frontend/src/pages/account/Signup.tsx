import { Button } from '@/components/ui/button.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { Link } from 'react-router-dom'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { z } from 'zod'
import { Control, FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput } from '@/pages/account/components/ControlledInput.tsx'

const SignupSchema = z
  .object({
    name: z
      .string({ required_error: 'Campo obrigatório' })
      .min(3, 'Minimo de 3 letras')
      .max(20, 'Máximo de 20 letras'),
    birthDate: z.coerce
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === z.ZodIssueCode.invalid_date
              ? 'Data inválida'
              : defaultError,
        }),
      })
      .refine((date) => {
        return date <= new Date(Date.now())
      }, 'Data inválida'),
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

export type TSignup = z.infer<typeof SignupSchema>

export function Signup() {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<TSignup>({
    resolver: zodResolver(SignupSchema),
  })

  function handleSignupSubmit(data: TSignup) {
    console.log(data)
  }

  return (
    <div className={'flex m-auto h-screen relative'}>
      <div className={'flex items-center m-auto flex-col gap-2'}>
        <Link
          to={'/'}
          className={'self-end text-gray-500 align-sub absolute top-5'}
        >
          Ir para a home
        </Link>
        <h1 className={'font-josefin-sans text-6xl font-bold'}>Filme Mania</h1>
        <h2 className={'text-xl'}>Tela de cadastro</h2>

        <form
          className={'flex items-start  m-auto flex-col w-full'}
          onSubmit={handleSubmit((data) => handleSignupSubmit(data))}
        >
          <ControlledInput
            control={control as Control<FieldValues>}
            label={'Nome'}
            id={'name'}
            placeholder={'Insira seu nome'}
            errorMessage={errors.name?.message}
          />

          <ControlledInput
            control={control as Control<FieldValues>}
            label={'Data de nascimento'}
            id={'birthDate'}
            type={'date'}
            errorMessage={errors.birthDate?.message}
          />

          <ControlledInput
            control={control as Control<FieldValues>}
            label={'Email'}
            id={'email'}
            placeholder={'Insira seu email'}
            errorMessage={errors.email?.message}
          />

          <ControlledInput
            control={control as Control<FieldValues>}
            label={'Senha'}
            id={'password'}
            placeholder={'*********'}
            type={'password'}
            errorMessage={errors.password?.message}
          />

          <label>Generos favoritos</label>
          <div className={'flex gap-5'}>
            <div>
              <Select onValueChange={(v) => setValue('favGenre1', Number(v))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Escolha um gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Romance</SelectItem>
                  <SelectItem value="2">Comédia</SelectItem>
                  <SelectItem value="3">Animação</SelectItem>
                </SelectContent>
              </Select>
              {errors.favGenre1?.message && (
                <p className={'text-red-600'}>{errors.favGenre1.message}</p>
              )}
            </div>

            <div>
              <Select onValueChange={(v) => setValue('favGenre2', Number(v))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Escolha um gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Romance</SelectItem>
                  <SelectItem value="2">Comédia</SelectItem>
                  <SelectItem value="3">Animação</SelectItem>
                </SelectContent>
              </Select>
              {errors.favGenre2?.message && (
                <p className={'text-red-600'}>{errors.favGenre2.message}</p>
              )}
            </div>
          </div>

          <div className={'w-full my-5'}>
            <Button
              variant={'default'}
              className={'w-2/3 flex m-auto bg-lightBlue'}
              type={'submit'}
            >
              Entrar
            </Button>
          </div>
        </form>

        <Separator className={'w-10 h-0.5 rounded bg-lightBlue'} />

        <div className={'flex flex-col items-center'}>
          <p className={'text-black'}>Já possui conta?</p>
          <Link to={'/account/login'} className={'font-bold'}>
            Entrar
          </Link>
        </div>
      </div>
    </div>
  )
}
