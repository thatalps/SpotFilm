import { apiAxios } from '../../../axios.config.ts'
import { IDataId, IUserProfile } from '@/types/interfaces.tsx'
import { AxiosResponse } from 'axios'

export async function getUserProfile(data: IDataId): Promise<IUserProfile> {
  const response: AxiosResponse = await apiAxios.post<IDataId>(
    `usuarios/${data.id}`,
  )

  if (response.status === 404) throw new Error('Usuário não encontrado')

  return response.data
}
