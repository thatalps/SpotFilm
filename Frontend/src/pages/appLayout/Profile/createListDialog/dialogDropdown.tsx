import { Popover, PopoverContent } from '@radix-ui/react-popover'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'
import { SearchResult } from '@/components/header/SearchResult.tsx'
import * as React from 'react'
import { useRef, useState } from 'react'
import { ICreateListSchema, IMovie } from '@/types/interfaces.tsx'
import { getMoviesByName } from '@/api/movies/getMoviesByName.ts'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PopoverTrigger } from '@/components/ui/popover.tsx'

const searchSchema = z.object({
  title: z.string().min(1, {
    message: 'O filme deve ter ser preenchido.',
  }),
})

interface ISearchSchema extends z.infer<typeof searchSchema> {}

export function DialogDropdown({
  selectDropdownMovie,
}: {
  selectDropdownMovie: (movie) => void
}) {
  const triggerRef = useRef<HTMLInputElement | null>(null)
  const { handleSubmit, control } = useForm<ISearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      title: '',
    },
  })
  const [movies, setMovies] = useState<IMovie[] | null>(null)

  async function searchMovie(data: ISearchSchema) {
    try {
      const movies = await getMoviesByName(data.title)
      triggerRef.current?.focus()
      setMovies(movies)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Popover className={'w-full'}>
      <PopoverTrigger>
        <div className="w-full flex items-center border-b px-3 bg-white rounded-md">
          <button onClick={handleSubmit(searchMovie)} type={'button'}>
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          </button>
          <Controller
            render={({ field: { name, onChange, onBlur, value } }) => {
              return (
                <Input
                  ref={triggerRef}
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
        </div>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        align={'start'}
        side={'bottom'}
        className={'bg-white mt-3 rounded-lg min-w-96'}
      >
        {movies && (
          <SearchResult
            selectDropdownMovie={selectDropdownMovie}
            movies={movies}
          />
        )}
      </PopoverContent>
    </Popover>
  )
}
