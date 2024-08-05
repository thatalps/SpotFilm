export interface IDataId {
  id: number
}

export interface IGenre {
  id: number
  name: string
}

export interface IMovie {
  release_date: string
  poster_path: string
  vote_average: number
  id: number
  title: string
  overview: string
  genres: IGenre[]
  backdrop_path: string
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

