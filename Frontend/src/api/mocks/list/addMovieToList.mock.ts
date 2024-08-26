import { http, HttpResponse } from 'msw'
import { ICreateListSchema } from '@/pages/appLayout/Profile/createListDialog/createListDialog.tsx'
import { IAddMovieToListRequest } from '@/api/list/addMovietoList.ts'

export const AddMovieToListMock = http.put<never, IAddMovieToListRequest>(
  '/lista/insercao/#',
  async () => {
    // const movieToAddToList = await request.json()

    return new HttpResponse(null, {
      status: 201,
    })
  },
)
