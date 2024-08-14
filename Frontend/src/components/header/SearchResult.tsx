import { IMovie } from '@/types/interfaces.tsx'
import { Clapperboard } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'

export function SearchResult({ movies }: { movies: IMovie[] }) {
  if (movies.length === 0) return <ResultEmpty />
  return (
    <ScrollArea className={'h-[200px]'}>
      {movies.map((movie) => (
        <ResultItem movie={movie} />
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
