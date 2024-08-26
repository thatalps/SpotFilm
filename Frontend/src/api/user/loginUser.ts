import { apiAxios } from '../../../axios.config.ts'
import { IDataId } from '@/types/interfaces.tsx'
import { TLogin } from '@/types/types.tsx'

export async function LoginUser(data: TLogin): Promise<number> {
  const response = await apiAxios.post<TLogin>(`usuarios/login`, {
    email: data.email,
    senha: data.password,
  })

  if (response.status === 500) {
    throw new Error('Falha ao logar o usuário')
  }

  return response.data.data
}
