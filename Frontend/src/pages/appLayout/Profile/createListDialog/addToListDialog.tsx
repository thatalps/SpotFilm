import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog.tsx'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'
import { toast } from 'sonner'
import { addToListSchema } from '@/types/schemas.tsx'
import { IAddtoListSchema } from '@/types/interfaces.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { addMovieToList } from '@/api/list/addMovietoList.ts'
import { getAllLists } from '@/api/list/getAllLists.ts'

export function AddToListDialog({
  movie: { id, name },
}: {
  movie: { id: number; name: string }
}) {
  const [isLoading, setIsLoading] = useState(false)
  const { user, userLists, createUserLists } = useContext(GlobalContext)
  const {
    control,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IAddtoListSchema>({
    resolver: zodResolver(addToListSchema),
    defaultValues: {
      movieId: id,
    },
    mode: 'onSubmit',
  })

  useEffect(() => {
    console.log(errors)
    if (errors.list) {
      toast.error('Preencha os campos!')
    }
  }, [errors])

  useEffect(() => {
    console.log(userLists)
  }, [userLists])

  function resetDialog() {
    reset()
  }

  async function handleAddMovieToList(data: IAddtoListSchema) {
    setIsLoading(true)
    try {
      if (!user?.id) throw new Error('Usuário não logado.')

      await addMovieToList({
        movieId: data.movieId,
        listId: data.list.id,
      })

      const allLists = await getAllLists({ id: user.id })
      createUserLists(allLists)

      toast.success('Filme adicionado a lista com sucesso!')
    } catch (e) {
      toast.error(e.message)
      console.log('Não foi possível criar a lista.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog onOpenChange={(state) => state && resetDialog()}>
      <DialogTrigger>
        <div className={'flex gap-2 justify-between'}>
          <h2 className={'text-2xl font-bold'}>Adicionar filme à lista</h2>

          <Button>
            Adicionar
            <Plus size={28} className={'self-center'} />
          </Button>
        </div>
      </DialogTrigger>

      <DialogContent className={'border-0 bg-black h-[20rem] text-white p-10'}>
        <DialogHeader className={'flex flex-col justify-between'}>
          <form
            onSubmit={handleSubmit(handleAddMovieToList)}
            className={'flex flex-col gap-2 '}
          >
            <div className={'flex flex-col gap-4'}>
              <label>Nome da lista</label>
              <Controller
                render={() => {
                  return (
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className={'p-2 bg-white text-black rounded-md'}
                      >
                        Escolha a lista
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className={'cursor-pointer'}>
                        {userLists?.map((list) => (
                          <DropdownMenuItem
                            className={'cursor-pointer'}
                            onClick={() =>
                              setValue('list', {
                                id: list.id,
                                title: list.title,
                              })
                            }
                          >
                            {list.title}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )
                }}
                name={'list'}
                control={control}
              />

              <span className={'text-yellow-500 italic'}>
                {watch('list.title')}
              </span>
            </div>
            <div className={'max-w-full  flex flex-col gap-5  mt-4'}>
              <label>Inicie a lista com um primeiro filme</label>
              <Input className={'text-black'} value={name} disabled={true} />
            </div>
            <Button
              disabled={isLoading}
              type={'submit'}
              variant={'secondary'}
              className={'w-1/3 self-end mt-4'}
            >
              Adicionar filmes
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
