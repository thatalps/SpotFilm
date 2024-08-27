import { apiAxios } from '../../../axios.config.ts'
import { IComment, IDataId } from '@/types/interfaces.tsx'


export async function getMoviesComments(movieId: IDataId): Promise<IComment[]> {
  const response = await apiAxios.get(`comentario/buscarPorFilme/${movieId.id}`)
  console.log('get comment')
  console.log(response)

  if (response.status === 404) return []

  const comments = response.data.map((comment) => {
    return {
      id: comment.id,
      created_at: comment.dataCriacao,
      text: comment.conteudo,
      name: comment.conteudo,
    }
  })

  return comments
}
