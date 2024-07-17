import { Stars } from './Stars.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx'
interface ICardMovie {
  name: string
  rating: number
  imgSource: string
}
export function CardMovie({ rating, name, imgSource }: ICardMovie) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className={'h-[400px] w-[225px] flex flex-col gap-2'}>
            <picture>
              <img src={imgSource} className={'rounded-lg'} />
            </picture>

            <p className={'font-bold text-lg'}>{name}</p>
            <Stars rating={rating} />
          </div>
        </DialogTrigger>

        <DialogContent className={'p-0 border-0 w-full bg-black h-[43.75rem]'}>
          <DialogHeader>
            <picture className={'relative'}>
              <img
                src={
                  'https://image.tmdb.org/t/p/w500/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg'
                }
                alt={'Fundo do filme'}
                className={
                  'w-full h-[250px] object-cover sm:rounded-t-lg opacity-15'
                }
              />
            </picture>

            <DialogDescription>aa</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
