import { setupWorker } from 'msw/browser'
import { env } from '../../../env.ts'
import { loginUserMock } from '@/api/mocks/user/loginUserMock.ts'
import { getUserProfileMock } from '@/api/mocks/user/getUserProfile.mock.ts'
import { SignupUserMock } from '@/api/mocks/user/signupUser.mock.ts'
import { getMoviesByGenreMock } from '@/api/mocks/movies/getMoviesByGenre.mock.ts'
import { GetMoviesByNameMock } from '@/api/mocks/movies/getMoviesByName.mock.ts'
import { GetMoviesCommentsMocks } from '@/api/mocks/movies/getMoviesComments.mocks.ts'
import { PostMovieCommentMock } from '@/api/mocks/movies/postMovieComment.mock.ts'
import { PostMovieRatingMock } from '@/api/mocks/movies/postMovieRating.mock.ts'
import { CreateCustomListMock } from '@/api/mocks/movies/createCustomList.mock.tsx'

export const worker = setupWorker(
  loginUserMock,
  getUserProfileMock,
  SignupUserMock,
  getMoviesByGenreMock,
  GetMoviesByNameMock,
  GetMoviesCommentsMocks,
  PostMovieCommentMock,
  PostMovieRatingMock,
  CreateCustomListMock,
)

export async function startMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
