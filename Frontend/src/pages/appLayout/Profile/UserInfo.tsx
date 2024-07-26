import { Button } from '@/components/ui/button.tsx'
import { Separator } from '@/components/ui/separator.tsx'

export function UserInfo() {
  return (
    <div className={'flex flex-col gap-5 col-start-1 sticky'}>
      <h2 className={'text-xl font-bold'}>Manuzinha</h2>

      <div>
        <p>Drama</p>
        <p>Suspense</p>
      </div>
      <Separator className={'h-1 text-white rounded w-10'} />

      <Button variant={'outline'} className={'text-black'}>
        Atualizar perfil
      </Button>
    </div>
  )
}
