import { Button } from '@/components/ui/button.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { Link } from 'react-router-dom'
import { ControlledInput } from '@/pages/account/components/ControlledInput.tsx'
import { Control, FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const LoginSchema = z.object({
  name: z
    .string({ required_error: 'Campo obrigatório' })
    .min(3, 'Minimo de 3 letras')
    .max(20, 'Máximo de 20 letras'),
  password: z.string({ required_error: 'Campo obrigatório' }),
})

type TLogin = z.infer<typeof LoginSchema>

export function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(LoginSchema),
  })

  function handleSignupSubmit(data: TLogin) {
    console.log(data)
  }
  return (
    <div className={'flex m-auto h-screen relative'}>
      <div className={'flex items-center m-auto flex-col gap-2 '}>
        <Link
          to={'/'}
          className={'self-end text-gray-500 align-sub absolute top-5'}
        >
          Ir para a home
        </Link>
        <h1 className={'font-josefin-sans text-6xl font-bold'}>Filme Mania</h1>
        <h2 className={'text-xl'}>Tela de login</h2>

        <form
          className={'flex items-start  m-auto flex-col gap-3 w-full'}
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
            label={'Senha'}
            id={'password'}
            placeholder={'*********'}
            type={'password'}
            errorMessage={errors.password?.message}
          />

          <div className={'w-full my-5'}>
            <Button
              variant={'default'}
              className={'w-2/3 flex m-auto bg-lightBlue'}
            >
              Entrar
            </Button>
          </div>
        </form>

        <Separator className={'w-10 h-0.5 rounded bg-lightBlue'} />

        <div className={'flex flex-col items-center'}>
          <p className={'text-black'}>Não possui conta?</p>
          <Link to={'/account/signup'} className={'font-bold'}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  )
}
