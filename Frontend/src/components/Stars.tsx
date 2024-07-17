import { Star } from 'lucide-react'
import * as color from 'tailwindcss/colors'

interface IStars {
  rating: number
}
export function Stars({ rating }: IStars) {
  return (
    <div className={'flex'}>
      {Array.from({ length: 5 }, (_, i) => {
        if (i < rating) {
          return <Star color={color.yellow['300']} fill={color.yellow['300']} />
        }

        return <Star color={color.yellow['300']} />
      })}
    </div>
  )
}
