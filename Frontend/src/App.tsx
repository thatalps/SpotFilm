import './styles/global.css'

import { AppRoutes } from '@/routes/appRoutes.tsx'
import { Toaster } from 'sonner'
import { ContextProvider } from '@/context/GlobalContext.tsx'

export function App() {
  return (
    <ContextProvider>
      <Toaster />
      <AppRoutes />
    </ContextProvider>
  )
}
