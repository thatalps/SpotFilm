import { apiAxios } from '../../../axios.config.ts'

export async function getMovieRating(userRating: {
  idMovie: number
  idUser: number
}) {
  const response = await apiAxios.get(
    `/avaliacao/buscar/?idFilme=${userRating.idMovie}=&idUsuario=${userRating.idUser}`,
  )

  console.log(response)
  return response.data.data
}
