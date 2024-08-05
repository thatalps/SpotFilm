import { http, HttpResponse } from 'msw'
import { TSignup } from '@/types/types.tsx'

export const SignupUserMock = http.post<never, TSignup>(
  '/users/sign-up',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'teste@gmail.com') {
      return new HttpResponse(null, {
        status: 409,
      })
    }

    if (email !== 'admin@gmail.com') {
      return new HttpResponse(null, {
        status: 500,
      })
    }

    return new HttpResponse(null, { status: 201 })
  },
)
