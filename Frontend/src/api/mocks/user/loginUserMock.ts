import { http, HttpResponse } from 'msw'
import { IDataId, TLogin } from '@/types/interfaces.tsx'

export const loginUserMock = http.post<TLogin, IDataId | null>(
  'usuarios/login',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'admin@gmail.com') {
      return new HttpResponse(
        JSON.stringify({
          id: 10,
        }),
        {
          status: 200,
        },
      )
    }

    return new HttpResponse(null, {
      status: 401,
    })
  },
)
