import { createContext, useEffect, useState } from 'react'
import { IUserProfile } from '@/types/interfaces.tsx'
import { getUserProfile } from '@/api/user/getUserProfile.ts'

interface IGlobalContext {
  setUserData: (data: IUserProfile) => void
  user: IUserProfile | undefined
  logout: () => void
}

export const GlobalContext = createContext({} as IGlobalContext)

export function ContextProvider({ children }) {
  const [user, setUser] = useState<IUserProfile>()

  async function getLocalStorage() {
    try {
      const id = localStorage.getItem('userId')
      if (id) {
        const user = await getUserProfile({ id: Number(id) })
        setUser(user)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  function logout() {
    localStorage.clear()
    setUser(undefined)
  }

  useEffect(() => {
    getLocalStorage()
  }, [])

  function setUserData(data: IUserProfile) {
    setUser(data)
  }

  return (
    <GlobalContext.Provider value={{ setUserData, user, logout }}>
      {children}
    </GlobalContext.Provider>
  )
}
