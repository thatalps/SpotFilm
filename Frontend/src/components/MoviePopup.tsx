import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog.tsx'
import { DialogTitle } from '@radix-ui/react-dialog'
import MovieBackground from '@/assets/backgroundHeader.png'
import RanddomMoviesPoster from '@/assets/randomMoviesPoster.jpg'
import { Stars } from '@/components/Stars.tsx'
import { AllComments } from '@/components/Comments/AllComments.tsx'
import { UserComment } from '@/components/Comments/UserComment.tsx'
import { ICardMovieDetails, IComment } from '@/types/interfaces.tsx'
import { useContext, useEffect, useState } from 'react'
import {
  getMoviesComments,
} from '@/api/movies/getMoviesComments.ts'
import { GlobalContext } from '@/context/GlobalContext.tsx'
import { Badge } from '@/components/ui/badge'
import { Component } from '@/components/RadialChart.tsx'

export function MoviePopup({ movie }: ICardMovieDetails) {
  const [comments, setComments] = useState<IComment[]>()
  const { user } = useContext(GlobalContext)

  useEffect(() => {
    getMoviesComments({ id: movie.id }).then((res) => setComments(res))
  }, [])

  return (
    <DialogContent
      className={'p-0 border-0 bg-black h-[50rem] max-w-2xl text-white'}
    >
      <DialogTitle></DialogTitle>
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
                  : RanddomMoviesPoster
              }
              className={'h-[15.625rem] rounded-lg object-cover w-full'}
            />
          </picture>

          <div className={'my-2 top-0 w-4/6 '}>
            <div className={'h-[13.4rem] overflow-y-scroll no-scrollbar mb-3'}>
              <h2 className={'font-bold text-2xl'}>{movie.title}</h2>

              <div className={'flex gap-2 my-2'}>
                {movie.genres &&
                  movie.genres.map((genre) => {
                    return <Badge variant={'secondary'}>{genre.name}</Badge>
                  })}
              </div>

              <Component rating={3} />
              <p>
                {movie.overview != null
                  ? movie.overview
                  : 'Não possui informações sobre.'}
              </p>
            </div>
            <Stars
              rating={movie.vote_average != null ? movie.vote_average : 1}
            />
          </div>
        </div>

        <DialogDescription className={'mx-10 flex flex-col '}>
          {comments && <AllComments comments={comments} />}

          {user && (
            <UserComment
              setComment={(comment) =>
                setComments((prevState) => [comment, ...prevState])
              }
              user={user}
            />
          )}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  )
}
