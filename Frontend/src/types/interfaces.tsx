import { z } from 'zod'
import { addToListSchema, createListSchema } from '@/types/schemas.tsx'

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
  releaseDate: string | null
  posterPath: string | null
  voteAverage: number | null
  id: number
  title: string
  overview: string | null
  generos: IGenre[] | null
  backdropPath: string | null
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
export interface IAddtoListSchema extends z.infer<typeof addToListSchema> {}

export interface IList {
  id: number
  title: string
  movies: IMovie[]
}
