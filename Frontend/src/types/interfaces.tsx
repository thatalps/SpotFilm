import { z } from 'zod'
import { createListSchema } from '@/types/schemas.tsx'

export interface IMoviesParams {
  genreId: string | undefined
  genreName: string | undefined
}

export interface IDataId {
  id: number
}

export interface IGenre {
  id: number
  name: string
}

export interface IMovie {
  release_date: string | null
  poster_path: string | null
  vote_average: number | null
  id: number
  title: string | null
  overview: string | null
  genres_id: IGenre[] | null
  backdrop_path: string | null
}

export interface IComment {
  id: number | null
  created_at: Date
  text: string
  rating: number
  name: string
}

export interface ICardMovieDetails {
  movie: IMovie
  comments: IComment[]
}

export interface IUserProfile {
  id: number
  name: string
  genre1: IGenre
  genre2: IGenre
}

export interface IUserRating {
  id: string
  idMovie: number
  idUser: number
  rating: number
}

export interface ICreateListSchema extends z.infer<typeof createListSchema> {}

export interface IList {
  id: string
  title: string
  movies: IMovie[]
}
