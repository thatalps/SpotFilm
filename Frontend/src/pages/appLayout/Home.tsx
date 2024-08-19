import { MovieSection } from '@/components/MovieSection.tsx'
import { Header } from '@/components/header/Header.tsx'
import { useContext, useEffect, useState } from 'react'
import { getMoviesByGenre } from '@/api/movies/getMoviesByGenre.ts'
import { IGenre, IMovie } from '@/types/interfaces.tsx'
import { LoaderCircle } from 'lucide-react'
import { GlobalContext } from '@/context/GlobalContext.tsx'
import { MovieSectionSkeleton } from '@/components/skeletons/movie-section-skeleton.tsx'

type TMovieList = Map<number, { name: string; movies: IMovie[] }>

function Home() {
  const [movieList, setMovieList] = useState<null | TMovieList>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { genres } = useContext(GlobalContext)

  async function getMovie() {
    setIsLoading(true)
    try {
      const movieMap = new Map<number, { name: string; movies: IMovie[] }>()

      const randomIndexList: number[] = []
      while (randomIndexList.length < 2) {
        const randomIndex = Math.floor(Math.random() * genres!.length)
        if (randomIndex !== randomIndexList.at(-1)) {
          randomIndexList.push(randomIndex)
        }
      }

      const filteredGenres = randomIndexList.map(
        (indexList) => genres![indexList],
      ) as IGenre[]

      for (const genre of filteredGenres) {
        const response = await getMoviesByGenre(genre.id)
        console.log(response)

        movieMap.set(genre.id, {
          name: genre.name,
          movies: [...response],
        })
      }

      setMovieList(movieMap)
    } catch (e) {
      console.log(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (genres) getMovie()
  }, [genres])

  if (isLoading || !movieList) {
    return <MovieSectionSkeleton />
  }

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
