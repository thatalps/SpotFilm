import { IMovie } from '@/types/interfaces.tsx'
import { Clapperboard } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import { toast } from 'sonner'
import RanddomMoviesPoster from '@/assets/randomMoviesPoster.jpg'

export function SearchResult({
  movies,
  selectDropdownMovie,
}: {
  movies: IMovie[]
  selectDropdownMovie: (IMovie) => void
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
              movie,
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

function ResultItem({ movie }: { movie: IMovie }) {
  return (
    <div className={'flex cursor-pointer p-3 rounded-md hover:bg-gray-100 '}>
      <picture className={'max-w-[50px] block'}>
        <img
          className={'w-full h-full block'}
          src={
            movie.poster_path !== null && !movie.poster_path?.includes('null')
              ? movie.poster_path
              : RanddomMoviesPoster
          }
          alt=""
        />
      </picture>

      <span className={'p-4'}>{movie.title}</span>
    </div>
  )
}
