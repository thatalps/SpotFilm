import { apiAxios } from '../../../axios.config.ts'
import { IDataId, IUserProfile } from '@/types/interfaces.tsx'
import { AxiosResponse } from 'axios'

export async function getUserProfile(data: IDataId): Promise<IUserProfile> {
  const response: AxiosResponse = await apiAxios.get<IDataId>(
    `usuarios/${data.id}`,
  )

  if (response.status === 401) throw new Error('Usuário não encontrado')

  return {
    id: response.data.data.id,
    name: response.data.data.nome,
    genre1: response.data.data.generoFav1,
    genre2: response.data.data.generoFav2,
  }
}
