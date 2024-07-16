import { Clapperboard } from 'lucide-react'

interface ISearchResultItem {
  children: string
}

export function SearchResultItem({ children }: ISearchResultItem) {
  return (
    <div className={'flex border border-black p-3 hover:bg-gray-100 '}>
      <Clapperboard className={'pr-2'} />
      <p>{children}</p>
    </div>
  )
}
