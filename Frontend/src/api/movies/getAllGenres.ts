import { apiAxios } from '../../../axios.config.ts'
import { IGenre } from '@/types/interfaces.tsx'

export async function getAllGenres(): Promise<{ genres: IGenre[] }> {
  const response = await apiAxios.get('api/get_lista_de_generos')

  console.log('oq ta retornando')
  console.log(response.data)
  console.log(response.status)

  if (response.data === undefined || response.status === 204)
    throw new Error('Problemas no servidor, volte mais tarde!')

  return response.data
}
