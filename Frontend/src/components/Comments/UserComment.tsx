import { Button } from '@/components/ui/button.tsx'
import { IComment, IUserProfile } from '@/types/interfaces.tsx'
import { postMovieComment } from '@/api/movies/postMovieComment.ts'
import { useContext, useRef } from 'react'
import { toast } from 'sonner'
import { GlobalContext } from '@/context/GlobalContext.tsx'

interface IUserCommentProps {
  setComment: (IComment) => void
  movieId: number
}

export function UserComment({ setComment, movieId }: IUserCommentProps) {
  const inputComment = useRef<HTMLTextAreaElement>(null)
  const { user } = useContext(GlobalContext)
  async function postUserComment(e) {
    if (!inputComment.current) return
    if (!user?.name) return

    e.preventDefault()
    const commentText: string = inputComment.current.value

    if (commentText.length <= 0) {
      return
    }

    const comment: IComment = {
      id: null,
      created_at: new Date().toISOString(),
      text: commentText,
      name: user.name,
    }
    toast.success('Comentário enviado com sucesso!')

    try {
      await postMovieComment({
        comment,
        userId: user.id,
        movieId,
      })
      console.log(comment)
      setComment(comment)
    } catch (e) {
      toast.error(e.message)
    }

    inputComment.current.value = ''
  }

  return (
    <div className={'w-full flex flex-col gap-1.5'}>
      <p className={'font-bold text-white'}></p>

      <div className={'flex gap-3'}>
        <textarea
          placeholder={'Compartilhe sua opinião.'}
          className={'resize-none w-full p-2 rounded-md h-10 text-black'}
          id={'userComment'}
          ref={inputComment}
        />
        <Button
          variant={'default'}
          className={'self-end bg-lightBlue'}
          onClick={(e) => postUserComment(e)}
        >
          Enviar
        </Button>
      </div>
    </div>
  )
}
