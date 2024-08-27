import { IUserRating } from '@/types/interfaces.tsx'
import { apiAxios } from '../../../axios.config.ts'

export async function postMovieRating(userRating: Omit<IUserRating, 'id'>) {
  await apiAxios.put(
    `avaliacao/postar/?idFilme=${userRating.idMovie}&idUsuario=${userRating.idUser}&pontuacao=${userRating.rating}`,
  )
}
