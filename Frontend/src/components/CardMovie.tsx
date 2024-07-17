import { Stars } from './Stars.tsx'
interface ICardMovie {
  name: string
  rating: number
  imgSource: string
}
export function CardMovie({ rating, name, imgSource }: ICardMovie) {
  return (
    <div className={'h-[400px] w-[225px] flex flex-col gap-2'}>
      <picture>
        <img src={imgSource} className={'rounded-lg'} />
      </picture>

      <p className={'font-bold text-lg'}>{name}</p>
      <Stars rating={rating} />
    </div>
  )
}
