import { MovieSection } from '@/components/MovieSection.tsx'
import * as React from 'react'
import { CreateListDialog } from '@/pages/appLayout/Profile/createListDialog/createListDialog.tsx'
import { useEffect, useState } from 'react'
import { IList } from '@/types/interfaces.tsx'
import { getAllLists } from '@/api/list/getAllLists.ts'

export function UserMovies() {
  const [lists, setLists] = useState<null | IList[]>(null)
  async function getAllUserList() {
    const response = await getAllLists()
    setLists(response)
  }

  useEffect(() => {
    getAllUserList()
  }, [])

  return (
    <div className={'flex flex-col gap-5 col-start-2 col-span-4'}>
      <CreateListDialog />

      {lists &&
        lists.map((list) => (
          <MovieSection id={list.id} name={list.title} movies={list.movies} />
        ))}

    </div>
  )
}
