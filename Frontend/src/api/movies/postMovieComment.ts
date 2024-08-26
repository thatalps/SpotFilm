import { apiAxios } from '../../../axios.config.ts'
import { IComment } from '@/types/interfaces.tsx'
import { commentsMock } from '@/api/mocks/movies/getMoviesComments.mocks.ts'

export async function postMovieComment({
  comment,
  userId,
  movieId,
}: {
  comment: IComment
  userId: number
  movieId: number
}) {
  const response = await apiAxios.post('comentario/postar', {
    data: {
      dataCriacao: comment.created_at,
      conteudo: comment.text,
      idUsuario: userId,
      idFilme: movieId,
    },
  })

  commentsMock.push(comment)

  if (response.status === 500) throw new Error('Problemas no servidor')
}
