import { MovieSection } from '@/components/MovieSection.tsx'
import * as React from 'react'
import { CreateListDialog } from '@/pages/appLayout/Profile/createListDialog/createListDialog.tsx'
import { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'

export function UserMovies() {
  const { userLists } = useContext(GlobalContext)

  return (
    <div className={'flex flex-col gap-5 col-start-2 col-span-4'}>
      <CreateListDialog />

      {userLists &&
        userLists.map((list) => (
          <MovieSection id={list.id} name={list.title} movies={list.movies} />
        ))}
    </div>
  )
}
