import { Input } from '@/components/ui/input.tsx'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { SearchResultItem } from '@/components/header/SearchResultItem.tsx'
import { Command, CommandInput } from '@/components/ui/command.tsx'
import { Search } from 'lucide-react'
import { Command as CommandPrimitive } from 'cmdk'
import { cn } from '@/lib/utils.ts'
import * as React from 'react'

export function Header() {
  return (
    <div className={'bg-header-background min-h-[400px] pt-[5%]'}>
      <div className={'body-spacing flex flex-col gap-3'}>
        <h1 className={'text-6xl font-josefin-sans font-bold'}>Bem Vindo!</h1>
        <p className={'text-base'}>
          Diversos filmes, maneiros, diversos e tops
        </p>

        <div className={'max-w-96 text-black z-10'}>
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
      </div>
    </div>
  )
}
