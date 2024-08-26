import { apiAxios } from '../../../axios.config.ts'
import { ICreateListSchema, IDataId, IMovie } from '@/types/interfaces.tsx'

interface IcreateCustomListProps {
  title: string
  movieId: number
  userId: number
}

export async function createCustomList(
  data: IcreateCustomListProps,
): Promise<IDataId> {
  const response = await apiAxios.post(
    `lista/criacao/?nomeLista=${data.title}&idFilme=${data.movieId}&idUsuario=${data.userId}`,
    data,
  )

  if (response.status === 401) {
    throw new Error('Token não fornecido.')
  }

  if (response.status !== 200) {
    throw new Error('Tente novamente mais tarde.')
  }

  return response.data
}
