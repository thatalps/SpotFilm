import { http, HttpResponse } from 'msw'
import { IComment } from '@/types/interfaces.tsx'

export const PostMovieCommentMock = http.post<never, IComment>(
  '/comentario/postar',
  async ({ request }) => {
    const comment = await request.json()
    console.log(comment)
    return new HttpResponse(null, { status: 200 })
  },
)
