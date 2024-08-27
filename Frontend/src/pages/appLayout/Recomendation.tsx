import { Button } from '@/components/ui/button.tsx'
import { getMoviesRecomendation } from '@/api/movies/getMoviesRecomendation.ts'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'
import { IMovie } from '@/types/interfaces.tsx'
import { MovieSection } from '@/components/MovieSection.tsx'
import { getMoviesRecomendationbyGenre } from '@/api/movies/getMoviesRecomendationbyGenre.ts'
import { ChevronLeft } from 'lucide-react'
import { CardMovie } from '@/components/CardMovie.tsx'
import { useNavigate } from 'react-router-dom'

export function Recomendation() {
  const { user } = useContext(GlobalContext)
  const [movies, setMovies] = useState<IMovie[]>()
  const navigate = useNavigate()
  async function getRecomendations() {
    const moviesGenre1 = await getMoviesRecomendationbyGenre({
      id1: user?.genre1.id,
      id2: user?.genre2.id,
    })

    setMovies(moviesGenre1)
  }

  useEffect(() => {
    if (user && user.genre1 && user.genre2) getRecomendations()
  }, [user])

  if (!user) return
  if (!movies) return

  return (
    <div className={'body-spacing py-10'}>
      <div className={'pb-3 flex justify-between'}>
        <h2 className={'text-2xl font-bold mb-3'}>Recomendados para você</h2>

        <Button onClick={() => navigate('/')}>
          <ChevronLeft size={16} />
          Voltar
        </Button>
      </div>

      <div className={'flex flex-wrap gap-5'}>
        {movies !== null ? (
          movies.map((movie) => {
            return <CardMovie {...movie} />
          })
        ) : (
          <p>Ta vazio</p>
        )}
      </div>
    </div>
  )
}
