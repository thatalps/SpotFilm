import { CreateListDialog } from '@/pages/appLayout/Profile/createListDialog/createListDialog.tsx'
import * as React from 'react'
import { AddToListDialog } from '@/pages/appLayout/Profile/createListDialog/addToListDialog.tsx'
import { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'

export function MoviePopupHandleLists({
  movie,
}: {
  movie: { id: number; name: string }
}) {
  const { user } = useContext(GlobalContext)

  if (!user) {
    return (
      <div className={'min-h-48 flex justify-center items-center'}>
        Logue adicionar à uma lista
      </div>
    )
  }

  return (
    <div className={'p-6 flex flex-col gap-4'}>
      <CreateListDialog />
      <AddToListDialog movie={movie} />
    </div>
  )
}
