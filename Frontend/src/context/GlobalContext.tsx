import { createContext, useEffect, useState } from 'react'
import { IGenre, IUserProfile } from '@/types/interfaces.tsx'
import { getUserProfile } from '@/api/user/getUserProfile.ts'
import { getAllGenres } from '@/api/movies/getAllGenres.ts'
import { toast } from 'sonner'

interface IGlobalContext {
  setUserData: (data: IUserProfile) => void
  user: IUserProfile | undefined
  logout: () => void
  genres: IGenre[] | undefined
}

export const GlobalContext = createContext({} as IGlobalContext)

export function ContextProvider({ children }) {
  const [user, setUser] = useState<IUserProfile>()
  const [genres, setGenres] = useState<IGenre[]>()

  async function getLocalStorage() {
    try {
      const id = localStorage.getItem('userId')
      if (id) {
        const user = await getUserProfile({ id: Number(id) })
        setUser({
          id: Number(id),
          name: user.name,
          genre2: user.genre2,
          genre1: user.genre1,
        })
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

    try {
      getAllGenres().then((res) => setGenres(res.genres))
      console.log("deu certo")
    } catch (e) {
      toast.error(e.message())
      console.log(e.message())
    }
  }, [])

  useEffect(() => {
    console.log('generos')

    console.log(genres)
  }, [genres])

  function setUserData(data: IUserProfile) {
    setUser(data)
  }

  return (
    <GlobalContext.Provider value={{ setUserData, user, logout, genres }}>
      {children}
    </GlobalContext.Provider>
  )
}
