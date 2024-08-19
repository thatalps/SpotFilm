import { AllComments } from '@/components/Comments/AllComments.tsx'
import { UserComment } from '@/components/Comments/UserComment.tsx'
import { useContext, useEffect, useState } from 'react'
import { IComment } from '@/types/interfaces.tsx'
import { getMoviesComments } from '@/api/movies/getMoviesComments.ts'
import { GlobalContext } from '@/context/GlobalContext.tsx'

export function MoviePopupCommentSection({ id }: { id: number }) {
  const [comments, setComments] = useState<IComment[]>()
  const { user } = useContext(GlobalContext)

  useEffect(() => {
    getMoviesComments({ id }).then((res) => setComments(res))
  }, [])

  if (!user) {
    return (
      <div className={'min-h-48 flex justify-center items-center'}>
        Logue para comentar
      </div>
    )
  }

  return (
    <div className={'mx-10 flex flex-col '}>
      {comments && <AllComments comments={comments} />}
      {!comments && (
        <div className={'min-h-48 flex justify-center items-center'}>
          Nenhum comentário...
        </div>
      )}

      {user && (
        <UserComment
          setComment={(comment) =>
            setComments((prevState) => [comment, ...prevState])
          }
          user={user}
        />
      )}

      {!user && (
        <div className={'min-h-48 flex justify-center items-center'}>
          Logue para comentar
        </div>
      )}
    </div>
  )
}
