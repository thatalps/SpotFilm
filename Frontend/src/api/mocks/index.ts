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
import { CreateCustomListMock } from '@/api/mocks/list/createCustomList.mock.tsx'
import { GetAllListsMock } from '@/api/mocks/list/getAllLists.mock.ts'
import { GetAllGenresMocks } from '@/api/mocks/movies/getAllGenres.mocks.ts'
import { AddMovieToListMock } from '@/api/mocks/list/addMovieToList.mock.ts'
import { GetMoviesRecomendationMocks } from '@/api/mocks/movies/getMoviesRecomendation.mocks.ts'
import { GetMoviesRecomendationByGenreMocks } from '@/api/mocks/movies/getMoviesRecomendationByGenre.mocks.ts'

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
  GetAllListsMock,
  GetAllGenresMocks,
  AddMovieToListMock,
  GetMoviesRecomendationMocks,
  PostMovieRatingMock,
  GetMoviesRecomendationByGenreMocks,
)

export async function startMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
