import { Stars } from '@/components/Stars.tsx'

export function Comment() {
  return (
    <div className={'w-full flex flex-col gap-1.5'}>
      <div className={'flex gap-2 font-bold text-white'}>
        <p>Josinete</p>
        <p>•</p>
        <Stars rating={4} size={14} className={'self-center'} />
      </div>
      <textarea
        placeholder={
          '"Frozen II" não apenas mantém o charme e o humor que encantaram os fãs do primeiro filme, mas também mergulha mais fundo na mitologia e na história de seus personagens, oferecendo uma narrativa rica em camadas e surpresas emocionantes.'
        }
        className={'resize-none w-full p-2 rounded-md h-20 bg-lightBlue placeholder-white'}
        disabled={true}
      />
    </div>
  )
}
