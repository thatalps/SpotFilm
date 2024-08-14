// noinspection TypeScriptValidateTypes

import { Star, LucideProps } from 'lucide-react'
import * as color from 'tailwindcss/colors'

interface IStars extends LucideProps {
  isStatic?: boolean
  rating: number
  setRating: (b: number) => void
}
export function Stars({
  rating,
  setRating,
  isStatic = true,
  ...props
}: IStars) {
  function postRate(r) {
    setRating(r)
  }
  return (
    <div className={`flex ${!isStatic && 'cursor-pointer'}`}>
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <Star
            {...props}
            color={color.yellow['300']}
            fill={i < rating ? color.yellow['300'] : null}
            onClick={() => postRate(i + 1)}
          />
        )
      })}
    </div>
  )
}
