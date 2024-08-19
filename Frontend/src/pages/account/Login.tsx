import { Button } from '@/components/ui/button.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { ControlledInput } from '@/pages/account/components/ControlledInput.tsx'
import { Control, FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/types/schemas.tsx'
import { TLogin } from '@/types/types.tsx'
import { LoginUser } from '@/api/user/loginUser.ts'
import { toast, Toaster } from 'sonner'
import { getUserProfile } from '@/api/user/getUserProfile.ts'
import { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'

export function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(LoginSchema),
  })
  const navigate = useNavigate()
  const { setUserData } = useContext(GlobalContext)

  async function handleLoginSubmit(data: TLogin) {
    try {
      const { id } = await LoginUser(data)
      console.log(id)
      // const userProfile = await getUserProfile({ id })
      // setUserData(userProfile)
      // localStorage.setItem('userId', JSON.stringify(id))
      toast.success('Login realizado com sucesso!', { duration: 2000 })
      // navigate('/')
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message, { duration: 2000 })
        console.log(e)
      }
    }
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
          onSubmit={handleSubmit((data) => handleLoginSubmit(data))}
        >
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

          <Toaster richColors />
        </div>
      </div>
    </div>
  )
}
