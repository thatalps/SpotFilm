import { http } from 'msw'
import { IUserRating } from '@/types/interfaces.tsx'

export const PostMovieRatingMock = http.post<never, IUserRating>(
  '/avaliacao/postar/*',
  async ({ request }) => {
    const rating = await request.json()
    console.log(rating)
  },
)
