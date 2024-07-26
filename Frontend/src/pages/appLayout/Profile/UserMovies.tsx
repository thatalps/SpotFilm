import { MovieSection } from '@/components/MovieSection.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Dropdown } from '@/components/Dropdown.tsx'
import * as React from 'react'

export function UserMovies() {
  return (
    <div className={'flex flex-col gap-5 col-start-2 col-span-4'}>
      <MovieSection name={'Recentemente avaliados'} />

      <Dialog>
        <DialogTrigger>
          <div className={'flex gap-2'}>
            <h2 className={'text-3xl font-bold'}>Minhas listas</h2>
            <Plus size={28} className={'self-center'} />
          </div>
        </DialogTrigger>

        <DialogContent
          className={'border-0 bg-black h-[20rem] text-white p-10'}
        >
          <DialogHeader className={'flex flex-col justify-between'}>
            <DialogTitle>Criar lista</DialogTitle>
            <DialogDescription>
              <form className={'flex flex-col gap-2 text-white'}>
                <div>
                  <label>Nome da lista</label>
                  <Input
                    className={'mt-2'}
                    placeholder={'insira um nome legal'}
                  />
                </div>
                <div>
                  <label>Adicione um filme</label>
                  <div className={'max-w-full text-black z-10 mt-2'}>
                    <Dropdown />
                  </div>
                </div>
              </form>
            </DialogDescription>
            <Button className={'w-1/3 self-end'}>Criar lista</Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <MovieSection name={'Para rir até mijar'} />
      <MovieSection name={'Pra chorar'} />
    </div>
  )
}
