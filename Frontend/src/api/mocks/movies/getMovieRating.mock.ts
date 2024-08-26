import { http, HttpResponse } from 'msw'
import { IUserRating } from '@/types/interfaces.tsx'

export const PostMovieRatingMock = http.get<never, IUserRating>(
  '/avaliacao/buscar/*',
  async () => {
    return new HttpResponse(JSON.stringify({ data: 4 }), { status: 201 })
  },
)
