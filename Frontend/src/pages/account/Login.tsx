import { Button } from '@/components/ui/button.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { Link } from 'react-router-dom'
import { InputsLabel } from '@/pages/account/components/InputsLabel.tsx'

export function Login() {
  return (
    <div className={'flex items-center m-auto flex-col gap-5'}>
      <h1 className={'font-josefin-sans text-6xl font-bold'}>Filme Mania</h1>
      <h2 className={'text-xl'}>Tela de login</h2>

      <form className={'flex items-start  m-auto flex-col gap-3 w-full'}>
        <InputsLabel
          label={'Nome'}
          id={'name'}
          placeholder={'Insira seu nome'}
        />
        <InputsLabel
          label={'Senha'}
          id={'password'}
          placeholder={'*********'}
          type={'password'}
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
  )
}
