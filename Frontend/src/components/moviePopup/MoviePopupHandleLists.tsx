import { CreateListDialog } from '@/pages/appLayout/Profile/createListDialog/createListDialog.tsx'
import * as React from 'react'
import { AddToListDialog } from '@/pages/appLayout/Profile/createListDialog/addToListDialog.tsx'

export function MoviePopupHandleLists({
  movie,
}: {
  movie: { id: number; name: string }
}) {
  return (
    <div className={'p-6 flex flex-col gap-4'}>
      <CreateListDialog />
      <AddToListDialog movie={movie} />
    </div>
  )
}
