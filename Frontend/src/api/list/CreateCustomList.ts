import { apiAxios } from '../../../axios.config.ts'
import { ICreateListSchema } from '@/pages/appLayout/Profile/createListDialog/createListDialog.tsx'

export async function createCustomList(
  newList: ICreateListSchema & { id: number },
) {
  const response = await apiAxios.post('lista/criacao', {
    idUsuario: newList.id,
    nomeLista: newList.title,
    idFilme: newList.movie.id,
  })

  if (response.status === 401) {
    throw new Error('Token não fornecido.')
  }

  if (response.status !== 200) {
    throw new Error('Tente novamente mais tarde.')
  }
}
