import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getMoviesByName } from '@/api/movies/getMoviesByName.ts'
import { CardMovie } from '@/components/CardMovie.tsx'
import { IMovie } from '@/types/interfaces.tsx'

function Search() {
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const [movies, setMovies] = useState<IMovie[] | undefined>()

  useEffect(() => {
    const title = new URLSearchParams(search).get('title')

    if (pathname === '/search' && !title) {
      navigate('/')
    }

    getMoviesByName(title).then((data) => setMovies(data))
  }, [search, pathname])

  return (
    <div className={'body-spacing  flex flex-row flex-wrap gap-2 gap-y-24'}>
      {movies && movies.map((movie) => <CardMovie key={movie.id} {...movie} />)}
    </div>
  )
}

export default Search
