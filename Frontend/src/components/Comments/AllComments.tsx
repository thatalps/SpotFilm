import { Comment } from '@/components/Comments/Comment.tsx'

export function AllComments() {
  return (
    <div
      className={
        'h-[20rem] overflow-scroll no-scrollbar flex flex-col gap-3 my-3'
      }
    >
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}
