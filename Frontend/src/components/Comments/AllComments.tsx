import { Comment } from '@/components/Comments/Comment.tsx'
import { IComment } from '@/types/interfaces.tsx'
import { useEffect } from 'react'

export function AllComments({ comments }: { comments: IComment[] }) {
  useEffect(() => {
    console.log(comments)
  }, [])
  return (
    <div
      className={
        'h-[19rem] overflow-scroll no-scrollbar flex flex-col gap-4 my-4'
      }
    >
      {comments != null && comments.length > 0 ? (
        comments.map((comment) => {
          return <Comment {...comment} />
        })
      ) : (
        <></>
      )}
    </div>
  )
}
