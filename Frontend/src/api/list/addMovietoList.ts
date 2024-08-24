import { apiAxios } from '../../../axios.config.ts'

export interface IAddMovieToListRequest {
  movieId: number
  listId: number
  userId: number
}

export async function addMovieToList({
  listId,
  movieId,
  userId,
}: IAddMovieToListRequest): Promise<void> {
  const response = await apiAxios.post(`lista/adicionar_filme_na_lista`, {
    listId,
    movieId,
    userId,
  })

  return response.data
}
