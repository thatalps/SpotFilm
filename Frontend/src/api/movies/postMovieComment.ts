import { apiAxios } from '../../../axios.config.ts'
import { IComment } from '@/types/interfaces.tsx'
import { commentsMock } from '@/api/mocks/movies/getMoviesComments.mocks.ts'

export async function postMovieComment(comment: IComment) {
  const response = await apiAxios.post('movie/comments', { data: comment })

  commentsMock.push(comment)

  if (response.status === 500) throw new Error('Problemas no servidor')
}
