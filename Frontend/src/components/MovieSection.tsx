import { CardMovie } from '@/components/CardMovie.tsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { IMovie } from '@/types/interfaces.tsx'
import { useNavigate } from 'react-router-dom'

interface IMovieSection {
  name: string
  movies: IMovie[]
}

export function MovieSection({ name, movies }: IMovieSection) {
  const navigate = useNavigate()

  return (
    <div>
      <div className={'pb-3 flex justify-between'}>
        <h2 className={'text-2xl font-bold'}>{name}</h2>

        <Button
          onClick={() =>
            navigate('/movies', { state: { label: name, movies } })
          }
        >
          Ver mais
          <ChevronRight size={16} />
        </Button>
      </div>

      {movies === null ? (
        <p className={'text-white h-[100px]'}>Falha ao retornar os filmes</p>
      ) : (
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {movies.map((movie) => {
              return (
                <CarouselItem key={movie.id} className="basis-2/9 h-[440px]">
                  <CardMovie {...movie} />
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  )
}
