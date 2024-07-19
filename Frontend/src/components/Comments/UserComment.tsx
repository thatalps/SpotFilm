import { Button } from '@/components/ui/button.tsx'

export function UserComment() {
  return (
    <div className={'w-full flex flex-col gap-1.5'}>
      <p className={'font-bold text-white'}>Manuzinha</p>
      <textarea
        placeholder={'Compartilhe sua opinião.'}
        className={'resize-none w-full p-2 rounded-md h-20'}
      />
      <Button variant={'default'} className={'self-end bg-lightBlue'}>
        Comentar
      </Button>
    </div>
  )
}
