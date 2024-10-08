import { http, HttpResponse } from 'msw'
import { IUserProfile } from '@/types/interfaces.tsx'

export const getUserProfileMock = http.get<never, IUserProfile>(
  '/usuarios/*',
  async () => {
    return new HttpResponse(
      JSON.stringify({
        name: 'Manu',
        genre1: {
          id: 2,
          name: 'Ação',
        },
        genre2: {
          id: 2,
          name: 'Romance',
        },
      }),
      { status: 200 },
    )
  },
)
