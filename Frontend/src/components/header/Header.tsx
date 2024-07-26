import * as React from 'react'
import { Dropdown } from '@/components/Dropdown.tsx'

export function Header() {
  return (
    <div className={'bg-header-background min-h-[400px] pt-[5%]'}>
      <div className={'body-spacing flex flex-col gap-3'}>
        <h1 className={'text-6xl font-josefin-sans font-bold'}>Bem Vindo!</h1>
        <p className={'text-base'}>
          Diversos filmes, maneiros, diversos e tops
        </p>

        <div className={'max-w-96 text-black z-10'}>
          <Dropdown />
        </div>
      </div>
    </div>
  )
}
