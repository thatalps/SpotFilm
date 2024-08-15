import { apiAxios } from '../../../axios.config.ts'
import { IList } from '@/types/interfaces.tsx'

export async function getAllLists(): Promise<IList[]> {
  const response = await apiAxios.get(`lista`)

  return response.data
}
