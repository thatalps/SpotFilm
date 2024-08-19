import { DialogContent, DialogHeader } from '@/components/ui/dialog.tsx'
import { DialogTitle } from '@radix-ui/react-dialog'
import MovieBackground from '@/assets/backgroundHeader.png'
import RandomMoviesPoster from '@/assets/randomMoviesPoster.jpg'
import { ICardMovieDetails } from '@/types/interfaces.tsx'
import { Badge } from '@/components/ui/badge.tsx'
import { RadialChart } from '@/components/RadialChart.tsx'
import { MoviePopupTabs } from '@/components/moviePopup/MoviePopupTabs.tsx'

export function MoviePopup({ movie }: ICardMovieDetails) {
  return (
    <DialogContent
      className={'p-0 border-0 bg-black h-fit max-w-2xl text-white'}
    >
      <DialogTitle />
      <DialogHeader>
        <picture className={'relative'}>
          {movie.backdrop_path !== null ? (
            <img
              src={
                movie.backdrop_path !== null
                  ? movie.backdrop_path
                  : MovieBackground
              }
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
                  : RandomMoviesPoster
              }
              className={'h-[15.625rem] rounded-lg object-cover w-full'}
            />
          </picture>

          <div className={'my-2 top-0 w-4/6 '}>
            <div className={'h-[16rem]  overflow-y-scroll no-scrollbar'}>
              <div className={'flex justify-between'}>
                <div>
                  <h2 className={'font-bold text-2xl py-2'}>{movie.title}</h2>

                  <div className={'flex gap-2 my-2'}>
                    {movie.genres_id &&
                      movie.genres_id.map((genre) => {
                        return <Badge variant={'secondary'}>{genre.name}</Badge>
                      })}
                  </div>
                </div>

                {movie.vote_average && (
                  <RadialChart rating={Math.round(movie.vote_average)} />
                )}
              </div>

              <p>
                {movie.overview != null
                  ? movie.overview
                  : 'Não possui informações sobre.'}
              </p>
            </div>
          </div>
        </div>

        <MoviePopupTabs id={movie.id} />
      </DialogHeader>
    </DialogContent>
  )
}
