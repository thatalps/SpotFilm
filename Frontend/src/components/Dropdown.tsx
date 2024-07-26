import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'
import { SearchResultItem } from '@/components/header/SearchResultItem.tsx'
import * as React from 'react'

export function Dropdown() {
  return (
    <div>
      <Popover className={'w-full'}>
        <PopoverTrigger className={'w-full'}>
          <div className="flex items-center border-b px-3 bg-white rounded-md">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              placeholder={'Pesquise um filme'}
              className={
                'flex focus-visible:outline-0 h-11 border-0 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground '
              }
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align={'start'}
          side={'bottom'}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className={'bg-white mt-3 rounded-lg min-w-96'}
        >
          <div className={'w-full h-44 overflow-y-scroll no-scrollbar'}>
            <SearchResultItem>aaaaaa</SearchResultItem>
            <SearchResultItem>aaaaaa</SearchResultItem>
            <SearchResultItem>aaaaaa</SearchResultItem>
            <SearchResultItem>aaaaaa</SearchResultItem>
            <SearchResultItem>aaaaaa</SearchResultItem>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
