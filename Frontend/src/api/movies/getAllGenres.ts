import { apiAxios } from '../../../axios.config.ts'
import { IGenre } from '@/types/interfaces.tsx'

export async function getAllGenres(): Promise<{ genres: IGenre[] }> {
  const response = await apiAxios.get('api/get_lista_de_generos')

  if (response.data === undefined || response.status === 204)
    throw new Error('Problemas no servidor, volte mais tarde!')

  return response.data
}
