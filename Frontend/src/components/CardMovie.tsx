import { Stars } from './Stars.tsx'
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'
import { IMovie } from '@/types/interfaces.tsx'
import RanddomMoviesPoster from '../assets/randomMoviesPoster.jpg'
import { MoviePopup } from '@/components/MoviePopup.tsx'

export function CardMovie(movie: IMovie) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className={'w-[225px] flex flex-col gap-2'}>
            <picture>
              <img
                src={
                  movie.poster_path !== null
                    ? movie.poster_path
                    : RanddomMoviesPoster
                }
                className={'min-h-[337px] rounded-lg object-cover'}
              />
            </picture>

            <p className={'font-bold text-lg text-start'}>
              {movie.title != null ? movie.title : ''}
            </p>
            <Stars
              rating={movie.vote_average != null ? movie.vote_average : 1}
            />
          </div>
        </DialogTrigger>

        <MoviePopup movie={movie} />
      </Dialog>
    </>
  )
}
