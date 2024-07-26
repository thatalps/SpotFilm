import { Stars } from './Stars.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog.tsx'
import { UserComment } from '@/components/Comments/UserComment.tsx'
import { AllComments } from '@/components/Comments/AllComments.tsx'
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

            <p className={'font-bold text-lg text-start'}>{name}</p>
            <Stars rating={rating} />
          </div>
        </DialogTrigger>

        <DialogContent
          className={'p-0 border-0 bg-black h-[50rem] max-w-2xl text-white'}
        >
          <DialogHeader>
            <picture className={'relative'}>
              <img
                src={
                  'https://image.tmdb.org/t/p/w500/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg'
                }
                alt={'Fundo do filme'}
                className={
                  'w-full h-[17.5rem] object-cover opacity-25 rounded-lg'
                }
              />
            </picture>

            <div className={'absolute flex mx-10 gap-10'}>
              <picture className={'my-2 top-0 w-2/6'}>
                <img
                  src={
                    'https://image.tmdb.org/t/p/w500/hOZKUJGN0m717LRSQDxhgABqWrf.jpg'
                  }
                  className={'h-[15.625rem] rounded-lg object-cover w-full'}
                />
              </picture>

              <div className={'my-2 top-0 w-4/6 '}>
                <div
                  className={'h-[13.4rem] overflow-y-scroll no-scrollbar mb-3'}
                >
                  <h2 className={'font-bold text-2xl'}>{name}</h2>
                  <p>
                    Elsa, Anna, Kristoff, Olaf e Sven se aventuram na floresta
                    encantada e nos mares escuros além de Arendelle – onde Elsa
                    descobre não apenas a verdade sobre seu passado, mas uma
                    ameaça ao seu reino. Elsa, Anna, Kristoff, Olaf e Sven se
                    aventuram na floresta encantada e nos mares escuros além de
                    Arendelle – onde Elsa descobre não apenas a verdade sobre
                    seu passado, mas uma ameaça ao seu reino. Elsa, Anna,
                    Kristoff, Olaf e Sven se aventuram na floresta encantada e
                    nos mares escuros além de Arendelle – onde Elsa descobre não
                    apenas a verdade sobre seu passado, mas uma ameaça ao seu
                    reino.
                  </p>
                </div>
                <Stars rating={rating} />
              </div>
            </div>

            <DialogDescription className={'mx-10 flex flex-col '}>
              <AllComments />
              <UserComment />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
