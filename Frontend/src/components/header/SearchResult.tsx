import { ICreateListSchema, IMovie } from '@/types/interfaces.tsx'
import { Clapperboard } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import { toast } from 'sonner'

export function SearchResult({
  movies,
  selectDropdownMovie,
}: {
  movies: IMovie[]
  selectDropdownMovie: (movie: Pick<ICreateListSchema, 'movie'>) => void
}) {
  if (movies.length === 0) return <ResultEmpty />
  return (
    <ScrollArea className={'h-[200px] max-w-[500px] flex flex-col'}>
      {movies.map((movie) => (
        <button
          type={'button'}
          className={'w-full'}
          key={movie.id}
          onClick={() => {
            toast.success('Filme selecionado!', { duration: 2000 })
            selectDropdownMovie({
              movie: {
                name: movie.title,
                id: movie.id,
              },
            })
          }}
        >
          <ResultItem movie={movie} />
        </button>
      ))}
    </ScrollArea>
  )
}

function ResultEmpty() {
  return (
    <div
      className={
        'flex border border-black gap-4 text-sm p-3 rounded-md hover:bg-gray-100 '
      }
    >
      <Clapperboard />
      <span>Sem resultados.</span>
    </div>
  )
}

function ResultItem({
  movie: { poster_path, title },
}: {
  movie: Pick<IMovie, 'poster_path' | 'title'>
}) {
  return (
    <div className={'flex cursor-pointer p-3 rounded-md hover:bg-gray-100 '}>
      <picture className={'max-w-[50px] block'}>
        <img className={'w-full h-full block'} src={poster_path || ''} alt="" />
      </picture>

      <span className={'p-4'}>{title}</span>
    </div>
  )
}