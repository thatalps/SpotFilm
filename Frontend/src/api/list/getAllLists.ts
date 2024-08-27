import { apiAxios } from '../../../axios.config.ts'
import { IDataId, IList } from '@/types/interfaces.tsx'

export async function getAllLists({ id }: IDataId): Promise<IList[]> {
  const response = await apiAxios.get(`/lista/?idUsuario=${id}`)
  console.log('aaaaaaaaaaa')
  console.log(response)

  return response.data
}
