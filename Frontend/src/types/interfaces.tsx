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
  genres: IGenre[] | null
  backdrop_path: string | null
}

export interface IComment {
  id: number
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
  name: string
  genre1: IGenre
  genre2: IGenre
}
