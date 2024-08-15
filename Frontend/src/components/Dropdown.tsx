import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'
import { SearchResult } from '@/components/header/SearchResult.tsx'
import * as React from 'react'
import { ChangeEvent, useState } from 'react'
import { IMovie } from '@/types/interfaces.tsx'
import { getMoviesByName } from '@/api/movies/getMoviesByName.ts'

export function Dropdown() {
  const [movies, setMovies] = useState<IMovie[] | null>(null)
  function getMovies(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    console.log(e.target.value)
    getMoviesByName(e.target.value).then((res) => setMovies(res))
  }
  return (
    <div>
      <Popover className={'w-full'}>
        <PopoverTrigger className={'w-full'}>
          <div className="flex items-center border-b px-3 bg-white rounded-md">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              // onChange={(e) => getMovies(e)}
              placeholder={'Pesquise um filme'}
              className={
                'flex focus-visible:outline-0 h-11 border-0 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground '
              }
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align={'start'}
          side={'bottom'}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className={'bg-white mt-3 rounded-lg min-w-96'}
        >
          {/* <div className={'w-full h-44 overflow-y-scroll no-scrollbar'}> */}
          {/*  {movies !== null && movies !== undefined && movies.length > 0 ? ( */}
          {/*    movies?.map((movie) => <SearchResultItem>aa</SearchResultItem>) */}
          {/*  ) : ( */}
          {/*    <></> */}
          {/*  )} */}
          {/* </div> */}

          <SearchResult>a</SearchResult>
        </PopoverContent>
      </Popover>
    </div>
  )
}
