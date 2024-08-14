import { Popover, PopoverContent } from '@radix-ui/react-popover'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'
import { SearchResult } from '@/components/header/SearchResult.tsx'
import * as React from 'react'
import { LegacyRef, useRef, useState } from 'react'
import { IMovie } from '@/types/interfaces.tsx'
import { getMoviesByName } from '@/api/movies/getMoviesByName.ts'
import { Button } from '@/components/ui/button.tsx'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PopoverTrigger } from '@/components/ui/popover.tsx'

const searchSchema = z.object({
  title: z.string().min(4, {
    message: 'O filme deve ter pelo menos 4 caracteres.',
  }),
})

interface ISearchSchema extends z.infer<typeof searchSchema> {}

export function DialogDropdown() {
  const popoverRef = useRef<HTMLDivElement | null>(null)
  const { handleSubmit, control } = useForm<ISearchSchema>({
    resolver: zodResolver(searchSchema),
  })
  const [movies, setMovies] = useState<IMovie[] | null>(null)
  // const [isOpen, setIsOpen] = useState(false)

  async function searchMovie(data: ISearchSchema) {
    try {
      const movies = await getMoviesByName(data.title)
      setMovies(movies)
      popoverRef.current?.focus()
      console.log(movies)
    } catch (e) {
      console.log(e)
      console.log('mds eu nao aguento mais')
    }
  }

  return (
    <div>
      <Popover className={'w-full'}>
        <PopoverTrigger>
          <form
            onSubmit={handleSubmit(searchMovie)}
            className="w-full flex items-center border-b px-3 bg-white rounded-md"
          >
            <button onSubmit={handleSubmit(searchMovie)} type={'submit'}>
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            </button>
            <Controller
              render={({ field: { name, onChange, onBlur, value } }) => {
                return (
                  <Input
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder={'Pesquise um filme'}
                    className={
                      'flex focus-visible:outline-0 h-11 border-0 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground '
                    }
                  />
                )
              }}
              name={'title'}
              control={control}
            />
          </form>
        </PopoverTrigger>
        <PopoverContent
          ref={popoverRef}
          onOpenAutoFocus={(e) => e.preventDefault()}
          align={'start'}
          side={'bottom'}
          className={'bg-white mt-3 rounded-lg min-w-96'}
        >
          {movies && <SearchResult movies={movies} />}
        </PopoverContent>
      </Popover>
    </div>
  )
}
