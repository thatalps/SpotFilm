import './styles/global.css'

import { AppRoutes } from '@/routes/appRoutes.tsx'
import { Toaster } from 'sonner'
import { ContextProvider } from '@/context/GlobalContext.tsx'
import * as React from 'react'

export function App() {
  return (
    <ContextProvider>
      <Toaster />
      <AppRoutes />
      <Toaster richColors />
    </ContextProvider>
  )
}
