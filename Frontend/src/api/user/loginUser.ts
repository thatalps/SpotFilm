import { apiAxios } from '../../../axios.config.ts'
import { IDataId, TLogin } from '@/types/interfaces.tsx'

export async function LoginUser(data: TLogin): Promise<IDataId> {
  const response = await apiAxios.post<TLogin>('/user/login', data)

  if (response.status === 404) {
    throw new Error('Falha ao logar o usuário')
  }

  return {
    id: response.data.id,
  }
}
