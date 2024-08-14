import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import { DialogDropdown } from '@/pages/appLayout/Profile/createListDialog/dialogDropdown.tsx'

export function CreateListDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className={'flex gap-2 justify-between'}>
          <h2 className={'text-3xl font-bold'}>Minhas listas</h2>

          <Button>
            Criar lista
            <Plus size={28} className={'self-center'} />
          </Button>
        </div>
      </DialogTrigger>

      <DialogContent className={'border-0 bg-black h-[20rem] text-white p-10'}>
        <DialogHeader className={'flex flex-col justify-between'}>
          <DialogTitle>Criar lista</DialogTitle>
          <div className={'flex flex-col gap-2'}>
            <div>
              <label>Nome da lista</label>
              <Input
                className={'mt-2 text-black'}
                placeholder={'insira um nome legal'}
              />
            </div>
            <div>
              <label>Adicione um filme</label>
              <div className={'max-w-full text-black z-10 mt-2'}>
                <DialogDropdown />
              </div>
            </div>
          </div>
          <Button className={'w-1/3 self-end'}>Criar lista</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
