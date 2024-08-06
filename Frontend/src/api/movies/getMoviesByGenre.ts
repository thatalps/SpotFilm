import { apiAxios } from '../../../axios.config.ts'
import { IMovie } from '@/types/interfaces.tsx'

export async function getMoviesByGenre(genreId: number): Promise<IMovie[]> {
  const response = await apiAxios.get('api/get_filmes_por_genero?id=' + genreId)

  if (response.status === 500) throw new Error('Problemas no servidor')

  return response.data
}
