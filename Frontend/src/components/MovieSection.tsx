import { CardMovie } from '@/components/CardMovie.tsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'

interface IMovieSection {
  name: string
}

export function MovieSection({ name }: IMovieSection) {
  return (
    <div>
      <div className={'pb-3 flex justify-between'}>
        <h2 className={'text-2xl'}>{name}</h2>

        <Button>
          Ver mais
          <ChevronRight size={16} />
        </Button>
      </div>

      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {Array.from({ length: 8 }, () => {
            return (
              <CarouselItem className="basis-1/4 h-[440px]">
                <CardMovie
                  name={'Frozen II'}
                  rating={2}
                  imgSource={
                    'https://image.tmdb.org/t/p/w500/hOZKUJGN0m717LRSQDxhgABqWrf.jpg'
                  }
                  id={1}
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
