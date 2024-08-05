import { setupWorker } from 'msw/browser'
import { env } from '../../../env.ts'
import { loginUserMock } from '@/api/mocks/user/loginUserMock.ts'
import { getUserProfileMock } from '@/api/mocks/user/getUserProfile.mock.ts'
import { SignupUserMock } from '@/api/mocks/user/signupUser.mock.ts'

export const worker = setupWorker(
  loginUserMock,
  getUserProfileMock,
  SignupUserMock,
)

export async function startMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
