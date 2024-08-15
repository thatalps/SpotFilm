import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'
import { IMovie } from '@/types/interfaces.tsx'
import RanddomMoviesPoster from '../assets/randomMoviesPoster.jpg'
import { MoviePopup } from '@/components/moviePopup/MoviePopup.tsx'
import { MovieContextProvider } from '@/context/MovieContext.tsx'

export function CardMovie(movie: IMovie) {
  return (
    <MovieContextProvider>
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
          </div>
        </DialogTrigger>

        <MoviePopup movie={movie} />
      </Dialog>
    </MovieContextProvider>
  )
}
