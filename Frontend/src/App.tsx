import './styles/global.css'

import { AppRoutes } from '@/routes/appRoutes.tsx'
import { Toaster } from 'sonner'
import { ContextProvider, GlobalContext } from '@/context/GlobalContext.tsx'
import { useContext, useEffect } from 'react'
import { getUserProfile } from '@/api/user/getUserProfile.ts'

export function App() {


  return (
    <ContextProvider>
      <Toaster />
      <AppRoutes />
    </ContextProvider>
  )
}
