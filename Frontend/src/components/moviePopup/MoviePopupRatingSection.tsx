import { Stars } from '@/components/Stars.tsx'
import { Button } from '@/components/ui/button.tsx'
import { postMovieRating } from '@/api/movies/postMovieRating.ts'
import { toast } from 'sonner'
import { useContext, useState } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'

export function MoviePopupRatingSection() {
  const [rating, setRating] = useState<number>(0)
  const context = useContext(GlobalContext)

  async function postRate() {
    if (rating === 0) return

    try {
      await postMovieRating({
        rating,
        idUser: context.user!.id,
        idMovie: 2,
      })
      toast.success('Avaliado com sucesso')
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div
      className={'gap-y-4 w-full p-8 flex flex-col items-center justify-center'}
    >
      <h1 className={'text-2xl font-bold font-josefin-sans '}>
        Qual foi sua experiência?
      </h1>
      <Stars isStatic={false} rating={rating} setRating={(r) => setRating(r)} />

      <Button variant={'ghost'} onClick={postRate}>
        {' '}
        Avaliar{' '}
      </Button>
    </div>
  )
}
