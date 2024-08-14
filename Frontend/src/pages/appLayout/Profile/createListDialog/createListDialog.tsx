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
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useRef, useState } from 'react'
import { createCustomList } from '@/api/list/CreateCustomList.ts'
import { GlobalContext } from '@/context/GlobalContext.tsx'
import { toast } from 'sonner'

const createListSchema = z.object({
  title: z.string().min(4),
  movie: z.object({
    id: z.number().nonnegative(),
    name: z.string(),
  }),
})

export interface ICreateListSchema extends z.infer<typeof createListSchema> {}

export function CreateListDialog() {
  const [selectedMovie, setSelectedMovie] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useContext(GlobalContext)
  const listTitle = useRef<HTMLInputElement | null>(null)
  const {
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateListSchema>({
    resolver: zodResolver(createListSchema),
    defaultValues: {
      title: '',
    },
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (errors.movie || errors.title) {
      toast.error('Preencha os campos!')
    }
  }, [errors])

  function resetDialog() {
    setSelectedMovie(undefined)
    reset()
  }

  function selectDropdownMovie({ movie }: Pick<ICreateListSchema, 'movie'>) {
    setSelectedMovie(movie.name)
    setValue('movie', movie)
    listTitle.current?.focus()
  }

  async function handleCreateList(data: ICreateListSchema) {
    setIsLoading(true)
    try {
      if (!user?.id) throw new Error('Usuário não logado.')

      await createCustomList({
        ...data,
        id: user.id,
      })

      toast.success('Lista criada com sucesso!')
    } catch (e) {
      toast.success('Não foi possível criar a lista.')
      console.log('Não foi possível criar a lista.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog onOpenChange={(state) => state && resetDialog()}>
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
          <DialogTitle className={'text-2xl font-josefin-sans'}>
            Criar lista
          </DialogTitle>
          <form
            onSubmit={handleSubmit(handleCreateList)}
            className={'flex flex-col gap-2'}
          >
            <div>
              <label>Nome da lista</label>
              <Controller
                render={({ field: { name, onChange, onBlur, value } }) => {
                  return (
                    <Input
                      ref={listTitle}
                      name={name}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder={'insira um nome legal'}
                      className={'mt-2 text-black'}
                    />
                  )
                }}
                name={'title'}
                control={control}
              />
            </div>
            <label>Adicione um filme</label>
            <div className={'max-w-full text-black flex flex-col gap-5  mt-2'}>
              <DialogDropdown
                selectDropdownMovie={selectDropdownMovie}
                isMovieSelected={!!selectedMovie}
              />
              {selectedMovie && (
                <span className={'text-white'}>
                  Filme Selecionado!{' '}
                  <span className={'text-yellow-500'}>{selectedMovie}</span>
                </span>
              )}
            </div>
            <Button
              disabled={isLoading}
              type={'submit'}
              onSubmit={handleSubmit(handleCreateList)}
              variant={'secondary'}
              className={'w-1/3 self-end mt-4'}
            >
              Criar lista
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
