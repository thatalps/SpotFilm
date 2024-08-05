import { createContext, useState } from 'react'
import { IUserProfile } from '@/types/interfaces.tsx'

interface IGlobalContext {
  setUserData: (data: IUserProfile) => void
  user: IUserProfile | undefined
}

export const GlobalContext = createContext({} as IGlobalContext)

export function ContextProvider({ children }) {
  const [user, setUser] = useState<IUserProfile>()

  function setUserData(data: IUserProfile) {
    setUser(data)
  }
  return (
    <GlobalContext.Provider value={{ setUserData, user }}>
      {children}
    </GlobalContext.Provider>
  )
}
