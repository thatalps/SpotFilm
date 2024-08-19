import AddMovie from '@/assets/addMovie.png'

export function CardAddMovie() {
  return (
    <div className={'w-[225px] flex flex-col gap-2'}>
      <picture className={'relative'}>
        <img
          src={AddMovie}
          className={'min-h-[337px] rounded-lg object-cover '}
        />
      </picture>
      <p className={'font-bold text-lg text-start'}></p>
    </div>
  )
}
