import { Button } from '@/components/ui/button.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { Link, useNavigate } from 'react-router-dom'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { Control, FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TSignup } from '@/types/types.tsx'
import { SignupSchema } from '@/types/schemas.tsx'
import { ControlledInput } from '@/pages/account/components/ControlledInput.tsx'
import { signupUser } from '@/api/user/signupUser.ts'
import { toast, Toaster } from 'sonner'

export function Signup() {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<TSignup>({
    resolver: zodResolver(SignupSchema),
  })
  const navigate = useNavigate()

  async function handleSignupSubmit(data: TSignup) {
    try {
      console.log(data)
      await signupUser(data)
      toast.success('Conta criada com sucesso!', { duration: 2000 })
      navigate('/account/login')
    } catch (e) {
      toast.error(e.message, { duration: 2000 })
    }
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

        <Toaster richColors />
      </div>
    </div>
  )
}
