import { MovieSection } from '@/components/MovieSection.tsx'
import { Header } from '@/components/header/Header.tsx'
import { useContext, useEffect, useState } from 'react'
import { getMoviesByGenre } from '@/api/movies/getMoviesByGenre.ts'
import { IMovie } from '@/types/interfaces.tsx'
import { GENRES } from '@/types/genres.ts'
import { LoaderCircle } from 'lucide-react'
import { GlobalContext } from '@/context/GlobalContext.tsx'

type TMovieList = Map<number, { name: string; movies: IMovie[] }>

function Home() {
  const [movieList, setMovieList] = useState<null | TMovieList>(null)
  const { genres } = useContext(GlobalContext)

  async function getMovie() {
    try {
      const movieMap = new Map<number, { name: string; movies: IMovie[] }>()

      for await (const genre of genres) {
        const response = await getMoviesByGenre(genre.id)
        const movies = response.results

        movieMap.set(genre.id, {
          name: genre.name,
          movies,
        })
      }

      setMovieList(movieMap)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  if (!movieList)
    return (
      <div className={' w-full mx-auto my-12 grid place-content-center'}>
        <LoaderCircle className={'animate-spin  size-48'} />
      </div>
    )

  console.log(Array.from(movieList))

  return (
    <>
      <Header />
      <div className={'body-spacing mt-[-40px] flex flex-col gap-10'}>
        {Array.from(movieList).map(([id, { movies, name }]) => {
          return <MovieSection key={id} name={name} movies={movies} />
        })}
      </div>
    </>
  )
}

export default Home
