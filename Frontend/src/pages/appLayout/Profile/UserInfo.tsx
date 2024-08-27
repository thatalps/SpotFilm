import { Separator } from '@/components/ui/separator.tsx'
import { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'

export function UserInfo() {
  const { user } = useContext(GlobalContext)
  return (
    <div className={'flex flex-col gap-5 col-start-1 sticky'}>
      <h2 className={'text-xl font-bold'}>{user?.name}</h2>

      <Separator className={'h-1 text-white rounded w-10'} />

      <div>
        <p>{user?.genre1.name}</p>
        <p>{user?.genre2.name}</p>
      </div>

      {/* <Button variant={'outline'} className={'text-black'}> */}
      {/*  Atualizar perfil */}
      {/* </Button> */}
    </div>
  )
}
