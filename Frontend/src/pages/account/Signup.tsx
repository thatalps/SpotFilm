import { InputsLabel } from '@/pages/account/components/InputsLabel.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { Link } from 'react-router-dom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover.tsx'

export function Signup() {
  return (
    <div className={'flex items-center m-auto flex-col gap-5'}>
      <h1 className={'font-josefin-sans text-6xl font-bold'}>Filme Mania</h1>
      <h2 className={'text-xl'}>Tela de cadastro</h2>

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

        <div className={'flex flex-col gap-2'}>
          <label>Generos Favoritos</label>
          <Popover>
            <PopoverTrigger></PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>


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
        <p className={'text-black'}>Já possui conta?</p>
        <Link to={'/account/login'} className={'font-bold'}>
          Entrar
        </Link>
      </div>
    </div>
  )
}
