import { apiAxios } from '../../../axios.config.ts'
import { IDataId, IMovie } from '@/types/interfaces.tsx'

export async function getMoviesRecomendation({
  id,
}: IDataId): Promise<IMovie[]> {
  const response = await apiAxios.get(`/api/filme/recomendacao/${id}`)

  if (response.data === undefined || response.status === 204)
    throw new Error('Problemas no servidor, volte mais tarde!')

  return response.data
}
