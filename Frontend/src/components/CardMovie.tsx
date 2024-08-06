import { Stars } from './Stars.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog.tsx'
import { UserComment } from '@/components/Comments/UserComment.tsx'
import { AllComments } from '@/components/Comments/AllComments.tsx'
import { IMovie } from '@/types/interfaces.tsx'
import MovieBackground from '../assets/backgroundHeader.png'
import RanddomMoviesPoster from '../assets/randomMoviesPoster.jpg'
import { DialogTitle } from '@radix-ui/react-dialog'

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

        <DialogContent
          className={'p-0 border-0 bg-black h-[50rem] max-w-2xl text-white'}
        >
          <DialogTitle></DialogTitle>
          <DialogHeader>
            <picture className={'relative'}>
              {movie.backdrop_path !== null ? (
                <img
                  src={movie.backdrop_path}
                  alt={'Fundo do filme'}
                  className={
                    'w-full h-[17.5rem] object-cover opacity-25 rounded-lg'
                  }
                />
              ) : (
                <img
                  src={MovieBackground}
                  alt={'Fundo do filme'}
                  className={
                    'w-full h-[17.5rem] object-cover opacity-90 rounded-lg'
                  }
                />
              )}
            </picture>

            <div className={'absolute flex mx-10 gap-10'}>
              <picture className={'my-2 top-0 w-2/6'}>
                <img
                  src={
                    movie.poster_path !== null
                      ? movie.poster_path
                      : RanddomMoviesPoster
                  }
                  className={'h-[15.625rem] rounded-lg object-cover w-full'}
                />
              </picture>

              <div className={'my-2 top-0 w-4/6 '}>
                <div
                  className={'h-[13.4rem] overflow-y-scroll no-scrollbar mb-3'}
                >
                  <h2 className={'font-bold text-2xl'}>{movie.title}</h2>
                  <p>{movie.overview != null ? movie.overview : 'Não possui informações sobre.'}</p>
                </div>
                <Stars
                  rating={movie.vote_average != null ? movie.vote_average : 1}
                />
              </div>
            </div>

            <DialogDescription className={'mx-10 flex flex-col '}>
              <AllComments />
              <UserComment />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
