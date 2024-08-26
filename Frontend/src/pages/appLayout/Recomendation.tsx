import { Button } from '@/components/ui/button.tsx'
import { getMoviesRecomendation } from '@/api/movies/getMoviesRecomendation.ts'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'
import { IMovie } from '@/types/interfaces.tsx'
import { MovieSection } from '@/components/MovieSection.tsx'

export function Recomendation() {
  const { user } = useContext(GlobalContext)
  const [movies, setMovies] = useState<{
    moviesGenre1: IMovie[]
    moviesGenre2: IMovie[]
  }>()
  async function getRecomendations() {
    const moviesGenre1 = await getMoviesRecomendation({ id: user?.genre1.id })
    const moviesGenre2 = await getMoviesRecomendation({ id: user?.genre2.id })

    setMovies({
      moviesGenre1,
      moviesGenre2,
    })
  }

  useEffect(() => {
    if (user && user.genre1 && user.genre2) getRecomendations()
  }, [user])

  if (!user) return
  if (!movies) return

  return (
    <div className={'min-h-screen'}>
      <div className={'mt-[50px]'}>
        <div className={'body-spacing mt-[-40px] flex flex-col gap-10'}>
          {movies.moviesGenre1 && (
            <MovieSection
              key={user.genre1.id}
              name={user.genre1.name}
              movies={movies.moviesGenre1}
            />
          )}
        </div>

        <div className={'body-spacing mt-[-40px] flex flex-col gap-10'}>
          {movies.moviesGenre2 && (
            <MovieSection
              key={user.genre2!.id}
              name={user.genre2!.name}
              movies={movies.moviesGenre2}
            />
          )}
        </div>
      </div>
    </div>
  )
}
