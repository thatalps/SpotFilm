import { MovieSection } from '@/components/MovieSection.tsx'
import * as React from 'react'
import { CreateListDialog } from '@/pages/appLayout/Profile/createListDialog/createListDialog.tsx'

export function UserMovies() {
  return (
    <div className={'flex flex-col gap-5 col-start-2 col-span-4'}>
      <CreateListDialog />

      <MovieSection name={'Para rir até mijar'} />
      <MovieSection name={'Pra chorar'} />
    </div>
  )
}
