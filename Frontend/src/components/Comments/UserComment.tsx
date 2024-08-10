import { Button } from '@/components/ui/button.tsx'
import { IComment, IUserProfile } from '@/types/interfaces.tsx'
import { postMovieComment } from '@/api/movies/postMovieComment.ts'
import { useRef } from 'react'
import { toast } from 'sonner'

interface IUserCommentProps {
  setComment: (IComment) => void
  user: IUserProfile
}

export function UserComment({ setComment, user }: IUserCommentProps) {
  const inputComment = useRef(null)

  async function postUserComment(e) {
    e.preventDefault()
    const commentText: string = inputComment.current.value

    if (commentText.length <= 0) {
      return
    }

    const comment: IComment = {
      id: null,
      created_at: new Date(),
      text: commentText,
      rating: 4,
      name: user?.name,
    }

    try {
      await postMovieComment(comment)
      setComment(comment)
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div className={'w-full flex flex-col gap-1.5'}>
      <p className={'font-bold text-white'}></p>
      <textarea
        placeholder={'Compartilhe sua opinião.'}
        className={'resize-none w-full p-2 rounded-md h-20'}
        id={'userComment'}
        ref={inputComment}
      />
      <Button
        variant={'default'}
        className={'self-end bg-lightBlue'}
        onClick={(e) => postUserComment(e)}
      >
        Comentar
      </Button>
    </div>
  )
}
