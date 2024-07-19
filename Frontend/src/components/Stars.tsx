// noinspection TypeScriptValidateTypes

import { Star, LucideProps } from 'lucide-react'
import * as color from 'tailwindcss/colors'

interface IStars extends LucideProps {
  rating: number
}
export function Stars({ rating, ...props }: IStars) {
  return (
    <div className={'flex'}>
      {Array.from({ length: 5 }, (_, i) => {
        if (i < rating) {
          return (
            <Star
              {...props}
              color={color.yellow['300']}
              fill={color.yellow['300']}
            />
          )
        }

        return <Star {...props} color={color.yellow['300']} />
      })}
    </div>
  )
}
