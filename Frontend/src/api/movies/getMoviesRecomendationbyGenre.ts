import { apiAxios } from '../../../axios.config.ts'
import { IMovie } from '@/types/interfaces.tsx'

export async function getMoviesRecomendationbyGenre({
  id1,
  id2,
}: {
  id1: number
  id2: number
}): Promise<IMovie[]> {
  const response = await apiAxios.get(
    `/api/filme/recomendacao_genero/${id1}/${id2}`,
  )

  if (response.data === undefined || response.status === 204)
    throw new Error('Problemas no servidor, volte mais tarde!')

  return response.data
}
