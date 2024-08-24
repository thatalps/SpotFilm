import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getMoviesByName } from '@/api/movies/getMoviesByName.ts'
import { CardMovie } from '@/components/CardMovie.tsx'
import { IMovie } from '@/types/interfaces.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ChevronLeft } from 'lucide-react'

function Search() {
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const [movies, setMovies] = useState<IMovie[] | undefined>()
  const [searchedMovie, setSearchedMovie] = useState<string | undefined>()

  useEffect(() => {
    const title = new URLSearchParams(search).get('title')

    if (pathname === '/search' && !title) {
      navigate('/')
    }

    setSearchedMovie(title)
    getMoviesByName(title).then((data) => setMovies(data))
  }, [search, pathname])

  return (
    <div className={'body-spacing py-10'}>
      <div className={'pb-3 flex justify-between'}>
        <h2 className={'text-2xl font-bold mb-3'}>
          Você pesquisou por:
          <span className={'text-yellow-300'}> {searchedMovie}</span>
        </h2>

        <Button onClick={() => navigate(-1)}>
          <ChevronLeft size={16} />
          Voltar
        </Button>
      </div>

      <div className={'flex flex-wrap gap-5'}>
        {movies &&
          movies.map((movie) => <CardMovie key={movie.id} {...movie} />)}
        {!movies && <p>Ta vazio</p>}
      </div>
    </div>
  )
}

export default Search
