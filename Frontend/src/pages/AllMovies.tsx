import { CardMovie } from '@/components/CardMovie.tsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { ChevronLeft } from 'lucide-react'

export function AllMovies() {
  const { state } = useLocation()
  const navigate = useNavigate()

  return (
    <div className={'body-spacing py-10'}>
      <div className={'pb-3 flex justify-between'}>
        <h2 className={'text-2xl font-bold mb-3'}>{state.label}</h2>

        <Button onClick={() => navigate(-1)}>
          <ChevronLeft size={16} />
          Voltar
        </Button>
      </div>

      <div className={'flex flex-wrap gap-5'}>
        {state.movies !== null ? (
          state.movies.map((movie) => {
            return <CardMovie {...movie} />
          })
        ) : (
          <p>Ta vazio</p>
        )}
      </div>
    </div>
  )
}
