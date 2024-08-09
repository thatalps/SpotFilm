import { Stars } from '@/components/Stars.tsx'
import { IComment } from '@/types/interfaces.tsx'

export function Comment(comment: IComment) {
  return (
    <div className={'w-full flex flex-col gap-1.5'}>
      <div className={'flex gap-2 font-bold text-white'}>
        <p>{comment.name}</p>
        <p>•</p>
        <Stars rating={comment.rating} size={14} className={'self-center'} />
      </div>
      <textarea
        placeholder={comment.text}
        className={
          'resize-none w-full p-2 rounded-md h-20 bg-lightBlue placeholder-white overflow-y-scroll no-scrollbar'
        }
        disabled={true}
      />
    </div>
  )
}
