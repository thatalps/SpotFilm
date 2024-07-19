import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar.tsx'
import { Header } from '@/components/header/Header.tsx'

export function AppLayout() {
  return (
    <div className={'text-gray-200 bg-darkBlue h-[100%]'}>
      <Navbar />
      <Header />
      <Outlet />
    </div>
  )
}
