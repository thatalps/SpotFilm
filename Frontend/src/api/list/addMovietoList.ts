import { apiAxios } from '../../../axios.config.ts'

export interface IAddMovieToListRequest {
  movieId: number
  listId: number
}

export async function addMovieToList({
  listId,
  movieId,
}: IAddMovieToListRequest): Promise<void> {
  const response = await apiAxios.put(
    `lista/insercao/?idLista=${listId}&idFilme=${movieId}`,
  )

  return response.data
}
