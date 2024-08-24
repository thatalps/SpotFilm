import { http, HttpResponse } from 'msw'
import { ICreateListSchema } from '@/pages/appLayout/Profile/createListDialog/createListDialog.tsx'

export const CreateCustomListMock = http.post<
  never,
  ICreateListSchema & { id: number }
>('lista/criacao', async ({ request }) => {
  const listToCreate = await request.json()

  console.log('lista para criar')
  console.log(listToCreate)

  // if (!listToCreate.id) {
  //   return new HttpResponse(null, { status: 401 })
  // }

  return new HttpResponse(JSON.stringify({ id: 5 }), { status: 200 })
})
