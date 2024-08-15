import { MovieSection } from '@/components/MovieSection.tsx'
import { Header } from '@/components/header/Header.tsx'
import { useEffect, useState } from 'react'
import { getMoviesByGenre } from '@/api/movies/getMoviesByGenre.ts'
import { IMovie } from '@/types/interfaces.tsx'
import { GENRES } from '@/types/genres.ts'
import { LoaderCircle } from 'lucide-react'

type TMovieList = Map<number, { name: string; movies: IMovie[] }>

function Home() {
  const [movieList, setMovieList] = useState<null | TMovieList>(null)
  async function getMovie() {
    try {
      const movieMap = new Map<number, { name: string; movies: IMovie[] }>()

      for await (const genre of GENRES) {
        const movies = await getMoviesByGenre(genre.id)

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
