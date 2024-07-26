import { Comment } from '@/components/Comments/Comment.tsx'

export function AllComments() {
  return (
    <div
      className={
        'h-[19rem] overflow-scroll no-scrollbar flex flex-col gap-4 my-4'
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
