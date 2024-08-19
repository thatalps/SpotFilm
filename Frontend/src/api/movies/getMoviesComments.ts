import { apiAxios } from '../../../axios.config.ts'
import { IComment, IDataId } from '@/types/interfaces.tsx'

export async function getMoviesComments(movieId: IDataId): Promise<IComment[]> {
  const response = await apiAxios.get('movie/comments', { data: movieId })

  return response.data
}