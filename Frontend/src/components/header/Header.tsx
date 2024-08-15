import * as React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  function handleSearchMovie(e: FormEvent) {
    e.preventDefault()

    const form = new FormData(e.target)
    const titleToSearch = form.get('titleToSearch') as string

    if (titleToSearch.length < 4) return

    navigate(`/search?title=${titleToSearch}`)
  }

  return (
    <div className={'bg-header-background min-h-[400px] pt-[5%]'}>
      <div className={'body-spacing flex flex-col gap-3'}>
        <h1 className={'text-6xl font-josefin-sans font-bold'}>Bem Vindo!</h1>
        <p className={'text-base'}>
          Diversos filmes, maneiros, diversos e tops
        </p>

        <div className={'max-w-96 text-black z-10'}>
          <form
            onSubmit={handleSearchMovie}
            className="flex items-center border-b px-3 bg-white rounded-md"
          >
            <button type={'submit'}>
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            </button>
            <Input
              name={'titleToSearch'}
              placeholder={'Pesquise um filme'}
              className={
                'flex focus-visible:outline-0 h-11 border-0 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground '
              }
            />
          </form>
        </div>
      </div>
    </div>
  )
}
