import { apiAxios } from '../../../axios.config.ts'
import { IMovie } from '@/types/interfaces.tsx'

export async function getMoviesByName(title: string): Promise<IMovie[]> {
  const response = await apiAxios.get('/filme/titulo/' + title)

  return response.data
}
