import { http } from 'msw'
import { IUserRating } from '@/types/interfaces.tsx'

export const PostMovieRatingMock = http.post<never, IUserRating>(
  'movie/rating',
  async ({ request }) => {
    const rating = await request.json()
    console.log('aaaaaaaaaaaaaa do backend')
    console.log(rating)
  },
)
