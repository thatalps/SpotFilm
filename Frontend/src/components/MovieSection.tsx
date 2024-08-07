import { CardMovie } from '@/components/CardMovie.tsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { IGenre, IMovie } from '@/types/interfaces.tsx'
import { useEffect, useState } from 'react'
import { getMoviesByGenre } from '@/api/movies/getMoviesByGenre.ts'

export function MovieSection({ name, id }: IGenre) {
  const [movies, setMovies] = useState<IMovie[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      getMoviesByGenre(id).then((res) => setMovies(res))
    } catch (e) {
      setError(e.message)
    }
  }, [])

  useEffect(() => {
    console.log(movies)
  }, [movies])

  return (
    <div>
      <div className={'pb-3 flex justify-between'}>
        <h2 className={'text-2xl font-bold'}>{name}</h2>

        <Button>
          Ver mais
          <ChevronRight size={16} />
        </Button>
      </div>

      {movies === null || error !== null ? (
        <p className={'text-white h-[100px]'}>Falha ao retornar os filmes</p>
      ) : (
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {movies.map((movie) => {
              return (
                <CarouselItem className="basis-2/9 h-[440px]">
                  <CardMovie {...movie} />
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  )

  // return movies === null ? null : (
  //   <div>
  //     <div className={'pb-3 flex justify-between'}>
  //       <h2 className={'text-2xl font-bold'}>{name}</h2>
  //
  //       <Button>
  //         Ver mais
  //         <ChevronRight size={16} />
  //       </Button>
  //     </div>
  //
  //     <Carousel opts={{ loop: true }}>
  //       <CarouselContent>
  //         {movies.map((movie) => {
  //           return (
  //             <CarouselItem className="basis-2/9 h-[440px]">
  //               <CardMovie {...movie} />
  //             </CarouselItem>
  //           )
  //         })}
  //       </CarouselContent>
  //     </Carousel>
  //   </div>
  // )
}
